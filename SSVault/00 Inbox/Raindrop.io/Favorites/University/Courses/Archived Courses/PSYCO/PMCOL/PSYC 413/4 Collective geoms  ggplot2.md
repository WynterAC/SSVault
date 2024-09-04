---
raindrop_id: 552627303
raindrop_highlights:
  643075fbc37fdddc9bd02214: fe028af43702b6c9167032064037bcc1
  64307614746ae91940c43060: 8fa8b193201974d6862abac67f1c17e5

---

# Metadata
Source URL:: https://ggplot2-book.org/collective-geoms.html


---
# 4 Collective geoms | ggplot2

Geoms can be roughly divided into individual and collective geoms. An individual geom draws a distinct graphical object for each observation (row). For example, the point geom draws one point per...

## Highlights

> [!quote]+ Updated on Fri Apr 07 2023 13:58:51 GMT-0600
>
> ggplot(Oxboys, aes(age, height, group = Subject)) + 
&gt;  geom_point() + 
&gt;  geom_line()

> [!info]+ Updated on Fri Apr 07 2023 13:59:16 GMT-0600
>
> data(Oxboys, package = &quot;nlme&quot;)
&gt;head(Oxboys)
&gt;#&gt;   Subject     age height Occasion
&gt;#&gt; 1       1 -1.0000    140        1
&gt;#&gt; 2       1 -0.7479    143        2
&gt;#&gt; 3       1 -0.4630    145        3
&gt;#&gt; 4       1 -0.1643    147        4
&gt;#&gt; 5       1 -0.0027    148        5
&gt;#&gt; 6       1  0.2466    150        6
