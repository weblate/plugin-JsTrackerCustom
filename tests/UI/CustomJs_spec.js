/*!
 * InnoCraft - the company of the makers of Piwik Analytics, the free/libre analytics platform
 *
 * @link https://www.innocraft.com
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

describe("CustomJs", function () {
    this.timeout(0);

    this.fixture = "Piwik\\Plugins\\JsTrackerCustom\\tests\\Fixtures\\UITestFixture";

    it('should show custom js admin', function (done) {
        expect.screenshot('manage').to.be.captureSelector('.pageWrap', function (page) {
            page.load("?module=JsTrackerCustom&action=index");
            page.sendKeys('[name="customJs"]', 'console.log("new code");');
            page.click('button[type=submit]');
        }, done);
    });

});