import MessageBox from "sap/m/MessageBox";
import BaseController from "../BaseController";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
		const core = sap.ui.getCore()
	}
}
