# WikiChrome

## About

Context: I've always liked reading about random things I find or find interesting on the internet in Wikipedia, but up until now, I'd have to search everything I found in google manually, and then go to Wikipedia. That got me thinking about a ~~lazier~~ efficient way to be able to open Wikipedia pages straight from the browser window. This would eventually become the idea for this project. 

Chrome Web Extension built in TypeScript using Chrome API. Simple way to open highlighted text as a Wikipedia article from right click menu or configurable keyboard shortcut. 

Currently under review for publishing in Chrome Web Store! :D 

## Built With

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  [![ts-jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)](https://github.com/kulshekhar/ts-jest) [![Chrome API](https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white)](https://developer.chrome.com/docs/extensions/reference/) 
 
## Usage 

1. At chrome://extensions, navigate to keyboard shortcuts.

   ![Screenshot 2023-11-02 120007](https://github.com/arescrimson/WikiChrome/assets/66581240/79a51ef6-11d3-498a-92df-d7a9977c84cc)<br>

3. Configure the shortcut to your preferred keybind. Configure for "WikiChrome Shortcut", NOT "Activate Extension".
   
    ![Screenshot 2023-11-01 235507](https://github.com/arescrimson/WikiChrome/assets/66581240/3a4899a1-a6b7-454d-8147-c17cf6238d0a) <br>  
   
4. Configure the chrome extension popup to set/unset your active tab as the newly opened tab. <br>

   ![Screenshot 2023-11-02 115136](https://github.com/arescrimson/WikiChrome/assets/66581240/735787f6-1505-481b-9a2c-bff621178375)

5. You can now search highlighted text by using your keybind on highlighted text. You can also search it within the context menu of a right click. Unreachable results will result in no action. <br>

   ![Screenshot 2023-11-02 000043](https://github.com/arescrimson/WikiChrome/assets/66581240/177b6255-64a7-4d42-872a-219f9429b96f)

## Installation 

For just an installation of the extension itself(if you want the file version instead of the Chrome Web Store download), 

1. download/clone the project, and locate the `dist` folder.
2. go to [Chrome Extensions](chrome://extensions), and select load unpacked.
3. select the `dist` folder as the unpacked folder.
4. Active Chrome Web Extension 

## Development 

1. download/clone the project.
2. run `cd WikiChrome`
4. run `npm install`
5. run `npm run build`
6. go to [Chrome Extensions](chrome://extensions), and select load unpacked.
7. select the `dist` folder as the unpacked folder.
8. Active Chrome Web Extension - Note that any changes made within the project itself will require a reload of the extension for changes to be reflected. 

## MIT License 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
