const { By } = require("selenium-webdriver");

const date = new Date();
const year = date.getFullYear();
const day = date.getDate();


const Schedule = function() {
    this.btnSchedule = By.xpath("//a[@title='Schedule' and contains(text(), 'Schedule')]");
    this.employeeList = By.xpath("*//div[@class='row-header3__text__title' and contains(text(), 'Employee')]");
    this.frameEmployees = By.xpath("//iframe[contains(@data-testid, 'app-frame')]");
    this.todayShift = By.xpath("//div[contains(@class, 'board-slot board-slot--clickable') and contains(@aria-label, '"+day+"') and contains(@aria-label, '"+year+" Employee One')]");
    this.modalShift = By.xpath("//div[contains(@class, 'edit-shift-modal__box edit-shift-modal__box--scroll')]");
    this.txtFrom = By.xpath("//input[@id='shiftStartEnd_start']");
    this.txtTo = By.xpath("//input[@id='shiftStartEnd_end']");
    this.descriptionArea = By.xpath("//textarea[@id='description']");
    this.btnCreate = By.xpath("//button[contains(text(), 'Create')]");
    this.shiftAssigned = By.xpath("//div[@class='shift-tile shift-tile--editable shift-tile--hidden shift-tile--assigned']");
    this.shiftStartTime = By.xpath("//span[@class='shift-tile__time-input shift-tile__time-input-inline']");


}


module.exports = Schedule;