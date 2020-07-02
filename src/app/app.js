const alertService = new AlertService();
const componentService = new ComponentService();
const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parseInputs = parseInputs(...inputs);
    if(inputsAreValid(...parseInputs)) {
      const [numA, numB] = parseInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parseInputs);
    }
  });
}
run(alertService, componentService);