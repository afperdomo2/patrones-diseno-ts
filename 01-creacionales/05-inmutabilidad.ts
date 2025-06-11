/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */
class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsavedChanges: boolean;

  constructor(
    content: string,
    cursorPosition: number,
    unsavedChanges: boolean
  ) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsavedChanges = unsavedChanges;
  }

  /**
   * Método para crear una copia del estado actual con posibles modificaciones.
   * @param content - Nuevo contenido del editor.
   * @param cursorPosition - Nueva posición del cursor.
   * @param unsavedChanges - Indica si hay cambios no guardados.
   * @returns Un nuevo objeto CodeEditorState con los valores actualizados.
   */
  copyWith({
    content = this.content,
    cursorPosition = this.cursorPosition,
    unsavedChanges = this.unsavedChanges,
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(content, cursorPosition, unsavedChanges);
  }

  displayState(): void {
    console.log(
      `%cContenido: ${this.content}\nPosición del cursor: ${this.cursorPosition}\nCambios no guardados: ${this.unsavedChanges}`,
      "color: blue"
    );
  }
}

class CodeEditorHistory {
  private states: CodeEditorState[] = [];
  private currentIndex: number = -1;

  /**
   * Agrega un nuevo estado al historial del editor de código.
   * Si estamos en un punto intermedio, elimina los estados futuros.
   * @param state - El estado del editor de código a agregar.
   */
  addState(state: CodeEditorState): void {
    // Si estamos en un punto intermedio, eliminamos los estados futuros
    if (this.currentIndex < this.states.length - 1) {
      this.states = this.states.slice(0, this.currentIndex + 1);
    }
    // Agregamos el nuevo estado
    this.states.push(state);
    this.currentIndex++;
  }

  /**
   * Rehace el último estado deshecho del editor de código.
   * @returns El estado rehacido del editor de código o null si no hay estados futuros.
   */
  redo(): CodeEditorState | null {
    // Si hay estados futuros, avanzamos al siguiente
    if (this.currentIndex < this.states.length - 1) {
      this.currentIndex++;
      return this.states[this.currentIndex];
    }
    return null; // No hay más estados para rehacer
  }

  /**
   * Obtiene el estado actual del editor de código.
   * @returns El estado actual del editor de código o null si no hay estados.
   */
  undo(): CodeEditorState | null {
    // Si hay estados previos, retrocedemos al anterior
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.states[this.currentIndex];
    }
    return null; // No hay más estados para deshacer
  }
}

function main() {
  const history = new CodeEditorHistory();

  // Estado inicial del editor de código
  let vsCodeState: CodeEditorState | null = new CodeEditorState(
    "Hola, mundo!",
    0,
    true
  );

  // Agregamos el estado inicial al historial
  console.log("✅ Estado inicial:");
  history.addState(vsCodeState);
  vsCodeState.displayState();

  // Modificamos el estado del editor de código
  console.log("✅ Estado modificado:");
  vsCodeState = vsCodeState.copyWith({
    content: "Hola, TypeScript!",
    cursorPosition: 5,
  });
  history.addState(vsCodeState);
  vsCodeState.displayState();

  // Modificamos nuevamente el estado del editor de código
  console.log("✅ Estado modificado nuevamente:");
  vsCodeState = vsCodeState.copyWith({
    content: "Hola, TypeScript! ¿Cómo estás?",
    cursorPosition: 10,
    unsavedChanges: false,
  });
  history.addState(vsCodeState);
  vsCodeState.displayState();

  // Deshacemos el último cambio
  console.log("🔄 Deshaciendo el último cambio:");
  vsCodeState = history.undo();
  vsCodeState?.displayState();

  // Rehacemos el último cambio deshecho
  console.log("🔄 Rehaciendo el último cambio deshecho:");
  vsCodeState = history.redo();
  vsCodeState?.displayState();
}

main();
