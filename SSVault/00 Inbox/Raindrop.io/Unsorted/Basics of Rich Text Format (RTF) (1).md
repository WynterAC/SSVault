---
raindrop_id: 768894180
raindrop_highlights:
  661b07a2975c9f1fd2200660: 67938170af7b24acb0f92f1c49278dd6
  661b07be658dd18332ef41d4: 9985030b5b34bae5f215c26547dc1b87
  661b07c2f1c8966413574a75: 3c327bb038753996a5498c4a4183c579
  661b0841975c9f1fd2201747: 85f11720eeff57877330282bc6f84875
  661b08c5e04abf3bdb72276e: 91d126662e1c399dc5d5d7e29f9dad89
  661b08d034997ccec33ab5db: cc33fb4052795ed986ba0a82bf0cabfb
  661b08dbacec476092299a7a: 70a47efa392ec29f28785be962fd7f5c
  661b090b34997ccec33abbec: 3a23a01cbbb310954768f44e79f0f3cd
  661b0914acec47609229a316: 827e4b21153a7a564422400eab574e1d
  661b091c34997ccec33abddd: 14803555fd3a25d0ef79683448c6ea74
  661b0929975c9f1fd22030f2: 0b4527071e896babdb89bc77c76428f6
  661b09392cb9d0c41e528b17: f9fc2b58ba33fb4f3452dd26541a7822
  661b094e658dd18332ef6fc0: 32f25275525ff4a0e9437bf9b3c9e9ff
  661b095353a49cf1175000a6: d960770280f4567f85775efee811f102
  661b0976e04abf3bdb723a5e: 3c5cbe62c8020b6c6843494008a5d955
  661b098a34997ccec33aca43: 0410ec65ea308af9819d5bfd899ec00e
  661b099a658dd18332ef778e: 0a356852dcfffff045228a654217244a
  661b09b7975c9f1fd2204046: e7ce03047bc52390eee89d1b1d13c1cb

---

# Metadata
Source URL:: https://iq.opengenus.org/rich-text-format/amp/#working_of_rtf


---
# Basics of Rich Text Format (RTF)

In this article, we have explored Rich Text Format (RTF) which is used for transferring documents between word processing software.

## Highlights

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> RTF provides codes that will let you do anything you can do in Word and a lot of things you can&#39;t do in HTML.
&gt;RTF format allows images and other entities within a document.
&gt;RTF file format also allows for encoding basic elements of the files, such as size, color, and font of the text.  However, as we went forward the doc and docs format started dominating the market.

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> mark printer control codes and information that applications use to manage documents.

> [!danger]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> Control Words

> [!info]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> Properties

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> A control word cannot be longer than 32 characters.

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> A backslash begins each control word.

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> The LetterSequence is made up of lowercase alphabetic characters (a-z). RTF is case sensitive

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> When a control word has no parameter or has a nonzero parameter, it is assumed that the control word turns on the property.
&gt;Example: &#92;b ► Bold the text.
&gt;
&gt;
&gt;When  a control word has a parameter of 0, it is assumed that the control word turns off the property.
&gt;Example: &#92;b0 ► Turns off Bold.

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> A control word takes the following form:
&gt;
&gt; &#92;LetterSequence&lt;Delimiter&gt;

> [!danger]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> 2. Control Symbols:

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> A control symbol consists of a backslash followed by a single, nonalphabetic character. Control symbols take no delimiters

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> Example: &#92;~ ► Represents a nonbreaking

> [!danger]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> 3. Groups:

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> A group consists of text and control words or control symbols enclosed in braces ({}).

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> The RTF file can include groups for fonts, styles, screen color, pictures, footnotes, comments (annotations), headers and footers, summary information, fields, and bookmarks, as well as document-, section-, paragraph-, and character-formatting properties

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> The opening brace ({ ) indicates the start of the group and the closing brace ( }) indicates the end of the group.

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> Each group specifies the text affected by the group and the different attributes of that text.

> [!quote]+ Updated on Sat Apr 13 2024 16:39:51 GMT-0600
>
> Formatting specified within a group affects only the text within that group.
