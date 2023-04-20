import { validateInputs } from "../utils/validate-inputs";

export class ErrorService {
    constructor() {
        this.errorBox = document.getElementById('error');
    }

    hideError = () => {
        this.errorBox.classList.add('invisible');
    };

    showError = () => {
        this.errorBox.classList.remove('invisible');
    };

    showErrorMessage = (inputs, number) => {
        const fullErrorMsg = inputs.reduce((msg, str, index) => {
            if (validateInputs(number[index])) {
                // 200,2400,NaN
                msg += '';
            } else {
                msg += `${str} is not a number. `;
            }
            return msg;
        }, '');

        // console.log(fullErrorMsg);
        this.errorBox.innerText = fullErrorMsg; //** */
        this.showError(); //** */
    };
}
