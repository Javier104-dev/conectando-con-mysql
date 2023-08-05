class AbstractController {
  constructor() {
    if (new.target === AbstractController) throw new Error("No se puede instanciar la clase");
  }
}

module.exports = {
  AbstractController,
};
