---
raindrop_id: 768900821
raindrop_highlights:
  661b1196acec4760922a9c78: fcc4aeb1c6eb1870b3f424a94112230c
  661b11dbc0fe4f7b16640820: a6bd6185b705c690034efbb3834b2539

---

# Metadata
Source URL:: https://iq.opengenus.org/rich-text-format/amp/#format_code


---
# Basics of Rich Text Format (RTF)

In this article, we have explored Rich Text Format (RTF) which is used for transferring documents between word processing software.

## Highlights

> [!quote]+ Updated on Sat Apr 13 2024 17:14:35 GMT-0600
>
> Field:
&gt;&lt;header&gt;
&gt;Description:
&gt;Header tables must appear in this order if they exist.
&gt;&#92;rtf1&#92;fbidis? &lt;character set&gt; &lt;from&gt;? &lt;deffont&gt; &lt;deflang&gt; &lt;fonttbl&gt;? 
&gt;&lt;filetbl&gt;? &lt;colortbl&gt;? &lt;stylesheet&gt;? &lt;stylerestrictions&gt;? 
&gt;&lt;listtables&gt;? &lt;revtbl&gt;? &lt;rsidtable&gt;? &lt;mathprops&gt;? &lt;generator&gt;?
&gt;
&gt;Properties:
&gt;
&gt;If the font, file, style, color, revision mark, and summary-information groups and document-formatting properties are included in the file, they must appear in the RTF header, which precedes the RTF body.

> [!quote]+ Updated on Sat Apr 13 2024 17:14:35 GMT-0600
>
> Font Table:
&gt;In addition, we use a variety of fonts in our documents to make them more understandable, more user-friendly.
&gt;To keep track of all these fonts, we used in our document we can use a font table.
&gt;All the fonts that can be used in a document are listed in a font table 
&gt;where each font is represented by a font number. (Ex. &#92;deff0)
&gt;
&gt;Syntax:
&gt;The syntax for a font table is {&#92;fonttbl //…declarations//…}, in which each declaration has this basic syntax:
&gt;{&#92;fnumber&#92;familycommand Fontname;}
&gt;A font can’t be used in a document until it is listed in the font table.
&gt;Implementation:
&gt;A font table with some font declarations:
&gt;{&#92;fonttbl
&gt;{&#92;f0&#92;froman Times;}
&gt;{&#92;f1&#92;fswiss Arial;}
&gt;{&#92;f2&#92;fmodern Courier New;}
&gt;}
&gt;
&gt;End: Every RTF document must end with a }
