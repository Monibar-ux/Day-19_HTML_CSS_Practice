const { test, expect } = require('@playwright/test');

test('uses five locator methods on Meridian', async ({ page }) => {
  await page.goto('https://insurance.roadtoqa.com/reviews');

  // 1. Role: this navigation item is a link, not a button.
  // This navigation item works as a link and not as a button, will take you to the "get a quote link"
  const getAQuote = page.getByRole('link', { name: 'Get a quote', exact: true });
  await expect(getAQuote).toHaveCount(1);
  await getAQuote.click();
  await expect(page).toHaveURL('https://insurance.roadtoqa.com/');

  // 2. Text: check words that a visitor can see.
  // verifies that the customer can see the text"transparent rating engine" exactly as written
  
  const ratingBadge = page.getByText('Transparent rating engine', { exact: true });
  await expect(ratingBadge).toBeVisible();

  // 3. Placeholder: use the exact hint in the quote-number field.
 // shows the same exact text in the hint in the quote number text box
  const quoteNumber = page.getByPlaceholder('QT-XXXXXXXX', { exact: true });
  await quoteNumber.fill('QT-DEMO1234');
  await expect(quoteNumber).toHaveValue('QT-DEMO1234');

  // 4. CSS: # means an ID. Inspect the page before choosing it.
  //  a css selector will help you locate an id by its hashtag(#)
  const driverByCss = page.locator('#driver_name');
  await expect(driverByCss).toHaveCount(1);
  await driverByCss.fill('Brooklyn Smith');
  await expect(driverByCss).toHaveValue('Brooklyn Smith');

  // 5. XPath: find an input by its id attribute.
  // XPath can help you find and input field by its id
  const driverByXPath = page.locator('//input[@id="driver_name"]');
  await expect(driverByXPath).toHaveCount(1);
  await driverByXPath.fill('Brandon Smith');
  await expect(driverByXPath).toHaveValue('Brandon Smith');

  // Bonus: the label is associated with the same input.
  const driverByLabel = page.getByLabel('Driver name', { exact: true });
  await expect(driverByLabel).toHaveValue('Brandon Smith');

  const continueButton = page.getByRole('button', { name: 'Continue', exact: true });
  await expect(continueButton).toBeVisible();
  await expect(continueButton).toBeEnabled();
  // Enabled means not disabled. It does not prove the next step works.
  // We do not click Find, submit a quote, sign in, or buy a policy.
});
