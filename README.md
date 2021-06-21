# Light Switch for Bootstrap 5

<div align="center">
    <img src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/light-mode.png" height="250"/>
</div>

<p align="center">
<b>Basic Bootstrap 5 custom checkbox to use night mode in your web site.</b>
</p>

## Under the hood

Switching to dark mode is done by toggling HTML tags that includes `-dark` or `-light` as a class. Performed by DOM manipulation using JavaScript. Text color also changed depending on lighting mode. **Local storage** is used to save preferences under the name *lightSwitch*

## Usage

Add custom checkbox to your html file then reference the `switch.js` script:

```html
<div class="form-check form-switch">
    <label class="form-check-label for="lightSwitch">Dark Mode</label>
    <input class="form-check-input" type="checkbox" id="lightSwitch">
</div>

<script src="switch.js"/>
```

### About Usage

Designed for default Bootstrap 5 theme. If you're using custom themes then, you will probably have to customize the theme for better results.

## Example Implementation

[Bootstrap 5 Demo](https://han109k.github.io/light-switch/)
