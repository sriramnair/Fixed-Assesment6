import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});
// Check that clicking the upper left square adds an X to the square.
test('I click upper left square and add X', async () => {

    let button = await (await driver).findElement(By.id('cell-0'));
    await button.click();
    
    expect(await button.getText()).toContain('X')
    await driver.sleep(2000)
    
});
//Check that clicking the upper right square adds an X to the square.
test('if i click the upper right sqaure it will add an X', async () =>{

    let button = await (await driver).findElement(By.id('cell-2'));
    await button.click();
   
    expect(await button.getText()).toContain('X')
    await driver.sleep(2000)
});
//Check that clicking the lower right square adds an X to the square.
test('if i click the upper right sqaure it will add an X', async () =>{
    
    let button = await (await driver).findElement(By.id('cell-8'));
    await button.click();
    
    expect(await button.getText()).toContain('X')
    await driver.sleep(2000)
});
//Check to see that the computer moves (adds an O) to a square after clicking on a square.
test('if i click a square computer inputs O', async () =>{
    
    let button = await (await driver).findElement(By.id('game-board'));
    let other_button = await (await driver).findElement
    
    expect(await button.getText()).toContain('O')
    await driver.sleep(2000)
});
