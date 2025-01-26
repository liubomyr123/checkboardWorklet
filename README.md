# Highlighter: Text Highlighter for Custom CSS Styles

This project allows you to highlight specific words or phrases in a text using custom styles. Built with CSS and JavaScript, it integrates with web pages to dynamically highlight words based on provided data, making it easy to draw attention to key content.

## Features
- Highlight specific words or phrases in text.
- Customize the highlight color and style using CSS variables.
- Easily configurable for various use cases (e.g., navigation, emphasis).
- Supports multiple styles for different words/phrases.
- Works with dynamic content and supports modern web standards.

## How to Use
1. Integrate the provided JavaScript code into your web page.
2. Define the target words/phrases you want to highlight and specify their colors.
3. Use CSS custom properties to configure styles (highlight colors, text color).
4. Load your content, and the script will automatically highlight the words as per the provided configuration.

### Example Usage
In your HTML, define a list of words to highlight and the corresponding highlight color:

```html
<style>
  --highlight-color: #FFDD57;
  --words-color: '{"red": [[["word1", "word2"], ["word3"]]], "green": [["word4", "word5"]]}';
</style>
<script src="highlighter.js"></script>
