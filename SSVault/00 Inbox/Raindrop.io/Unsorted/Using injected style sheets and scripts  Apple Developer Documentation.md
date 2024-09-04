---
raindrop_id: 764696422
raindrop_highlights:
  660f85d3386e89afa62294de: 5393c365995fa5e0120f434e19f47df5

---

# Metadata
Source URL:: https://developer.apple.com/documentation/safariservices/safari_app_extensions/using_injected_style_sheets_and_scripts


---
# Using injected style sheets and scripts | Apple Developer Documentation

Learn how you can affect the appearance or behavior of a webpage by using injected style sheets and scripts.

## Highlights

> [!quote]+ Updated on Thu Apr 04 2024 23:02:11 GMT-0600
>
> njected style sheets function like user style sheets, as defined by the W3C. The system adds styles in the following order:Your Safari app extension stylesThe webpage author&#39;s stylesThe webpage author&#39;s styles that are declared as !importantYour Safari app extension styles that are declared as !importantAt each stage, a new definition overrides any previous definition. The system adds style properties in your injected style sheets to existing page style properties, but your styles don’t override existing page styles unless you declare the new ones as !important.
