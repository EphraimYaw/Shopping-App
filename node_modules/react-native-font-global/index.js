import React from "react";
import { Text, TextInput } from "react-native";

export default function applyFontGlobally(fontFamily) {
  const oldTextRender = Text.render;
  const oldTextInputRender = TextInput.render;

  Text.render = function (...args) {
    const originalText = oldTextRender.call(this, ...args);

    return React.cloneElement(originalText, {
      style: [{ fontFamily }, originalText.props.style],
    });
  };

  TextInput.render = function (...args) {
    const originalTextInput = oldTextInputRender.call(this, ...args);

    return React.cloneElement(originalTextInput, {
      style: [{ fontFamily }, originalTextInput.props.style],
    });
  };
}
