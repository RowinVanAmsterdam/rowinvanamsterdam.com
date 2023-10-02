---
slug: "Using react-json-schema-form with TailwindCSS"
date: "2023-03-20"
title: ""
description: ""
author: "Rowin van Amsterdam"
authorImage: "/images/profilePictures/profile-picture.jpg"
banner: "/articleMedia/add-syntax-highlighting-in-react-using-markdown-to-jsx-and-react-syntax-highlighter/banner.jpg"
bannerAlt: "Code snippet"
bannerCaption: ""
bannerCaptionLink: ""
discussOnTwitterId: ""
---

If you are building forms in ReactJS, you might be familiar with react-json-schema-form, a popular library for generating forms based on a JSON schema. By default, this library comes with a Bootstrap theme, which might not fit the design needs or is unnecessary when you already make use of a different styling library like TailwindCSS for example. Out of the box react-json-schema-form supports multiple styling libraries, like Material UI and Ant Design. 

However, it does not support TailwindCSS, which is a popular choice these days. Luckily, you can easily take the default bootstrap theme and replace the classname with TailwindCSS classes to customize the form's appearance.

# Create a custom theme
https://www.xtivia.com/blog/using-react-jsonschema-form-with-tailwind-css-and-daisyui/