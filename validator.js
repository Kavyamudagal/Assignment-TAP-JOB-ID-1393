class FormValidator {
  constructor(form) {
      this.form = form;
      this.rules = {};
      this.errorMessages = {};
  }

  addRule(field, rule, message, options = {}) {
      if (!this.rules[field]) {
          this.rules[field] = [];
          this.errorMessages[field] = [];
      }
      this.rules[field].push({ rule, options });
      this.errorMessages[field].push(message);
  }

  validate() {
      let isValid = true;
      Object.keys(this.rules).forEach(field => {
          const input = this.form.querySelector(`[name="${field}"]`);
          const rules = this.rules[field];
          const errorMessages = this.errorMessages[field];
          let fieldIsValid = true;

          rules.forEach((ruleObj, index) => {
              const { rule, options } = ruleObj;
              const message = errorMessages[index];
              const errorElement = document.getElementById(`${field}Error`);

              let valid;
              switch (rule) {
                  case 'required':
                      valid = input.value.trim() !== '';
                      break;
                  case 'email':
                      valid = /^\S+@\S+\.\S+$/.test(input.value);
                      break;
                  case 'match':
                      const matchField = this.form.querySelector(`[name="${options.matchField}"]`);
                      valid = input.value === matchField.value;
                      break;
                  default:
                      valid = true;
              }

              if (!valid) {
                  errorElement.textContent = message;
                  input.classList.add('input-error');
                  fieldIsValid = false;
              } else {
                  errorElement.textContent = '';
                  input.classList.remove('input-error');
              }
          });

          if (!fieldIsValid) {
              isValid = false;
          }
      });

      return isValid;
  }
}
