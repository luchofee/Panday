const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require("assert");
const { until } = require('selenium-webdriver');
const SchedulePage = require('../page_objects/schedulePage');

const schedule = new SchedulePage();
var employeeNames = [];
var index = 0;

Then(/^can see '(.*)' Employees displayed$/, async function (count) {
    Elem = await this.driver.findElement(schedule.frameEmployees);
    await this.driver.switchTo().frame(Elem); 

    await this.driver.wait(() => this.driver.findElements(schedule.employeeList));
    await this.driver.findElements(schedule.employeeList).then(function(elements){
        elements.forEach(function (element) {
            element.getText().then(function(text){
                employeeNames.push(text);
            });
            index++;
        });
    });

    assert.equal(index, count);
});

Then(/^create a shift from '(.*)' to '(.*)'$/, async function (from, to) {
    await this.driver.wait(() => this.driver.findElement(schedule.todayShift));
    await this.driver.findElement(schedule.todayShift).click(); 

    await this.driver.wait(until.elementIsVisible(this.driver.findElement(schedule.modalShift)),100);
    await this.driver.wait(() => this.driver.findElement(schedule.modalShift));
    
    this.driver.findElement(schedule.txtFrom).click();
    this.driver.findElement(schedule.txtFrom).sendKeys(from);
    this.driver.findElement(schedule.txtTo).click();
    this.driver.findElement(schedule.txtTo).sendKeys(to);
    this.driver.findElement(schedule.descriptionArea).click();
    this.driver.findElement(schedule.descriptionArea).sendKeys('Luciano test');

    this.driver.findElement(schedule.btnCreate).click();
});

Then(/^now I can see the new Shift for Employee One$/, async function () {
    await this.driver.wait(() => this.driver.findElement(schedule.shiftAssigned));
    await this.driver.wait(() => this.driver.findElement(schedule.shiftStartTime));
    await this.driver.findElement(schedule.shiftStartTime).getText().then((value) => {
        assert.equal(value,'9:00');
    } );

});