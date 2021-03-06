import * as monacoEditor from "monaco-editor";

export interface EditorProps {
  readonly: boolean;
  initialContent: string;
  editorOption?: monacoEditor.editor.IEditorConstructionOptions;
}
