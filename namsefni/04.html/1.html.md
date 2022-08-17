---
title: Fyrirlestur — HTML
---

# Fyrirlestur — HTML

## Vefforritun 1 — TÖL107G

### Ólafur Sverrir Kjartansson, [osk@hi.is](mailto:osk@hi.is)

---

## Texti & upplýsingar

* Frá örófi alda höfum við sagt sögur
* Fyrst manna á milli, síðan á skinni, pappír og bókum
* Núna á _vefnum_

***

## HyperText

* Hugtak um ólínulegan texta sem er tengdur við annan texta og hægt er að nálgast strax
* Skilgreint af [Ted Nelson](https://en.wikipedia.org/wiki/Ted_Nelson) 1963
  * Innblásið af t.d. Vennevar Bush í greininni [„As We May Think“](http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/?single_page=true) árið 1945
* Í raunheimum mætti líkja þessu við „Veldu þitt eigið ævintýri“ bækur.

***

## Mother of all Demos

* Í [„Mother of all Demos“](https://www.youtube.com/watch?v=yJDv-zdhzMY) árið 1968 kynnti Douglas Engelbart til sögunnar NLS („oN Line System“)
* Kynnti t.d. músina, [Hypertext](https://www.youtube.com/watch?v=74c8LntW7fo), fjarfundarbúnað o.fl.
* Árið **1968**

***

> The future is already here — it's just not very evenly distributed.
>  
> —William Gibson

***

## Markup Language

* Á einhverjum tímapunkti þurfum við leið til að ljá texta aukna dýpt
* Markup language leyfir okkur það
* Lýsing á skjali sem er setningarfræðilega aðgreind frá texta skjalsins

***

* Lightweight – Einföld setningarfræði sem eykur læsileiki fyrir fólk, t.d. [Markdown](https://daringfireball.net/projects/markdown/)
* Presentational – WYSIWYG ritlar, markup falið fyrir notanda, t.d. Word

***

* Procedural – markup innifalið í texta sem leiðbeiningar um aðgerðir á textann, t.d. LaTeX
* Descriptive – markup gefur texta merkingu sem er óháður birtingu þess, t.d. HTML

***

## Markdown

```md
### Markdown fyrirsögn

Texti sem inniheldur **feitletraðan** og
_skáletraðan_ texta
með [tengli](http://example.org).

* Listi
* af
* orðum
```

***

## Markdown – birting

### Markdown fyrirsögn

Texti sem inniheldur **feitletraðan** og
_skáletraðan_ texta
með [tengli](http://example.org).

* Listi
* af
* orðum

***

![NeXT tölvan sem Tim Berners-Lee notaði til að skrifa fyrsta vefþjóninn og vafrann. Á tölvu er skrifað „This machine is a server DO NOT POWER DOWN!!“ Mynd: https://en.wikipedia.org/wiki/File:First_Web_Server.jpg](img/800px-First_Web_Server.jpg)

***

* ☝️ NeXT tölvan sem Tim Berners-Lee notaði til að skrifa fyrsta vefþjóninn og vafrann
* [Fyrsta vefsíðan](http://info.cern.ch/hypertext/WWW/TheProject.html) varð aðgengileg 23. ágúst 1991, og er enn aðgengileg á sömu slóð í dag

***

## Þróun fyrstu árin

* Fyrstu árin fór þróun fram á póstlistum og hjá einstaklingum sem voru áhugasamir
* [Marc Anderseen stakk upp á `<IMG>`](http://1997.webhistory.org/www.lists/www-talk.1993q1/0182.html) árið 1993 til að geta birt myndir á vefnum
  * Ennþá eins í dag
  * `<img src="<slóð-á-mynd>">`

***

* Vöfrum fjölgaði…
  * [Line Mode Browser](http://line-mode.cern.ch/)
  * Lynx
  * Mosaic
  * Netscape Navigator
* Vefsíðum fjölgaði…

***

## Staðlar

* Skilgreina _hvernig_ HTML á að virka
* Fyrst reynt án árangurs fyrir HTML 1.0 hjá [IETF](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force) (Internet Engineering Task Force)
* Tókst þó fyrir útgáfu 2.0 í [RFC 1866](https://tools.ietf.org/html/rfc1866) árið 1995
* Tim Berners-Lee stofnaði W3C (World Wide Web Consortium) hjá MIT árið 1994 með stuðning frá Evrópusambandinu og [DARPA](https://en.wikipedia.org/wiki/DARPA)

***

## W3C

* Stofnað af Tim Berners-Lee til að vinna að framþróun vefsins
* Óháð samtök

***

* Sér um staðla og stöðlun á ýmsu tengdum vefnum
  * HTML, CSS en _ekki_ JavaScript
* Stöðlunarferli langt og strangt
  * _Working draft_ → _Candidate recommendation_ → _Proposed recommendation_ → _W3C recommendation_

***

> The primary design principle underlying the Web’s usefulness and growth is universality. […] And it should be accessible from any kind of hardware that can connect to the Internet: stationary or mobile, small screen or large.
>
> — Tim Berners-Lee: [Long Live the Web](https://www.scientificamerican.com/article/long-live-the-web/) á 20 ára afmæli vefsins, árið 2010.

---

## „Vafrastríðin“

* Fyrra vafrastríðið varð þegar Microsoft fór að dreifa Internet Explorer ókeypis með Windows í kringum 1997
* Varð valdur að því að Netscape Navigator hvarf (varð þó að Firefox)
* Eftir þetta varð stöðnun hjá vöfrum í mörg ár

***

![Markaðshlutdeildir vafra í „Fyrsta vafrastríðinu“.](img/1st-browser-wars.png "Markaðshlutdeildir vafra í „Fyrsta vafrastríðinu“. Credit: Mynd frá Wikimedia: https://commons.wikimedia.org/wiki/File:Browser_Wars_(en).svg")

***

* Annað vafrastríðið byrjaði þegar Safari kom út 2003 og Firefox 2004
* Mikil pressa frá vefforriturum að vafrar (sér í lagi IE6) myndu styðja staðla _rétt_
* iPhone kom út 2007, engin öpp í byrjun, bara vefir
* Chrome kom út 2008

***

![Hlutdeild vafra 2009-2015.](img/2nd-browser-wars.png "Hlutdeild vafra 2009-2015. Credit: Mynd frá Wikimedia: https://commons.wikimedia.org/wiki/File:Usage_share_of_web_browsers_(Source_StatCounter).svg")

---

## SGML

* Standard Generalized Markup Language
* [ISO staðall](http://en.wikipedia.org/wiki/International_Organization_for_Standardization) sem skilgreinir almennt markup mál fyrir skjöl
* Byggir á tveimur hugmyndum:
  * Snið ætti að vera lýsandi
  * Snið ætti að vera strangt svo auðvelt sé að vinna úr því

***

## HTML

* HyperText Markup Language
* Kom fyrst fram á sjónarsviðið 1993, þróað af Tim Berners-Lee
* Útgáfur 1.0–4.01 byggðar á SGML
* Seinni útgáfur, XHTML og HTML5

***

## HTML 4

* Staðlað af W3C árið 1997
* Enn byggt á SGML
* Skilgreinir „nútíma“ HTML

---

## Elements

* Einstakur hluti af vefsíðu og býr til tré með öðrum hlutum
* Inniheldur önnur element eða texta nóðu, mynda _tré_
* Hvert element táknar merkingu, hefur _merkingarfræðilegt gildi_ (e. semantic value)
* `<p>Halló heimur</p>` er element sem skilgreinir setningu (paragraph) með texta nóðuna _„Halló heimur“_

***

```html
<article>
  <section>
    <h2>Fyrirsögn #1</h2>
    <p>Hér er <strong>eitthvað mikilvægt</strong>.</p>
  </section>
  <section>
    <h2>Fyrirsögn #2</h2>
    <p>Lorem ipsum.</p>
    <p>Ut enim ad minim veniam.</p>
  </section>
</article>
```

***

```ascii
<article>
 ├▷<section>
 │  ├▷<h2> ─▷ Fyrirsögn #1
 │  └▷<p>
 │     ├▷ Hér er 
 │     ├▷<strong> ─▷ eitthvað mikilvægt
 │     └▷ .
 └▷<section>
    ├▷<h2> ─▷ Fyrirsögn #2
    ├▷<p>  ─▷ Lorem ipsum.
    └▷<p>  ─▷ Ut enim ad minim veniam.
```

***

## Tags

* Element byrja á tagi, t.d. `<p>`
* Element þurfa ekki, en ættu, að enda á loka tagi, t.d. `</p>`
* Ef element hefur skilgreind _attribute_ eru þau sett á byrjunar tagið

***

* Ef element hefur aðeins byrjunar tag, getum við _sjálflokað því_ (self closing), t.d. `<br/>`
  * Þarf **ekki** í HTML5 og ættum að sleppa

***

Mjög algengt að fólk geri ekki greinarmun á _element_ og _tag_, en það er munur.

***

## Attribute

* Nafn-gildis par sem breytir elementi, t.d. `<p class="important">`
* Gildið þarf ekki að vera umlukið gæsalöppum en það er æskilegt til gildið sé skýrt
* Sum attribute þarf aðeins að skilgreina með nafni, t.d. `<option selected>`
* Skrifum sem heiti í lástöfum, samasemmerki, gæsalappir opnast, gildi, gæsalappir lokast

***

Svona

```html
href="https://example.org"
```

**ekki** svona

```html
href ="https://example.org"
href = "https://example.org"
HREF="https://example.org"
Href=https://example.org
```

***

## HyperLink (tengill)

* `<a>` element með `href` attribute skilgreinir tengil (e. hyperlink)
* Grunnurinn að vefnum—tengir saman mismunandi vefi

***

## Merkingarfræði

* Það er sterklega mælst til þess að markup í HTML skjali sé aðeins notað til að tjá merkingu en ekki framsetningu
* Framsetning á gögnum er stýrt með CSS og fáum við því hreina skiptingu á milli efnis og útlits
* Mörg element til sem skilgreina merkingu en annars er hægt að nota attributes

***

## Dæmi

```html
<b>Fyrirsögn</b>
<br>Halló heimur
```

<div>
  <b>Fyrirsögn</b>
  <br>Halló heimur
</div>

```html
<h2>Fyrirsögn</h2>
<p>Halló heimur</p>
```

<div>
  <h2 style='margin-bottom: 0; text-transform: none'>Fyrirsögn</h2>
  <p style='margin-top: 0;'>Halló heimur</p>
</div>

***

## Af hverju merkingarfræði?

* Aðskilnaður á milli merkingar og útlits gerir manni auðveldara að breyta öðru án þess að hafa áhrif á hitt
* Einfaldar viðhald, breytingar eru dýrar
* Góð merkingarfræði getur aukið aðgengi að vef

***

* Vélar sem skoða vef með merkingarfræðilega réttu HTML geta dregið ályktanir um efnið sem getur gagnast þér og öðrum
  * T.d. Googlebot, Pocket, _reader view_ í vöfrum
* Vafrar geta birt efni á nytsamlegan hátt sem höfundur hafði ekki dottið í hug
* Það er _snyrtilegra_ og _faglegra_

***

## Áður fyrr…

* Merkingu og framsetningu var blandað óhikað saman
* Töflur ásamt ósýnilegum myndum (spacer gif) notaðar til að stýra útliti
* `<FONT>` notað til að stýra stærð og lit á letri
  * `<FONT size="12" color="red" face="Comic Sans MS">Halló heimur!</FONT>`

***

* Hjálpsemi og samhæfni nútíma vafra gera okkur þó kleyft að birta fjörgamalt HTML sem engin ætti að nota

<div>
  <font size="12" color="red" face="Comic Sans MS">Halló heimur!</font>
</div>

```html
<font size="12" color="red" face="Comic Sans MS">
  Halló heimur!
</font>
```

***

## Úrelt element

* Búið að fjarlægja element sem notuð voru aðeins til birtingar, t.d. `<center>`og `<font>`
* Einnig búið að fjarlægja attribute af sama meiði, t.d. `align`, `background`, `bgcolor` og `border`

***

* Skrifum HTML þannig að beri merkingu
* Stýrum framsetningu með CSS
* Fáum hreina skiptingu milli efnis og útlits

***

## `<div>` & `<span>`

* Ómerkingarbær element en notuð þegar ekkert annað _á&nbsp;við_
* `<div>` – division, skiptir síðu, _block level_, fyllir út í lárétt pláss foreldris
* `<span>` – merkir texta. Inline, fellur inn í nærliggjandi texta

***

## Merkingarfræðileg siðvendni

* Verður allt að vera 100% merkingarfræðilegt og má aldrei nota `<div>` eða `<span>`?
* Höfum merkingarfræði í huga og gerum okkar besta
* Einbeitum okkur að því að að skrifa snyrtilegt og gott HTML!
* Eyðum ekki of löngum tíma í að finna hið eina rétta element, notum `<div>` eða `<span>` ef svo ber við

---

## HTML grunnur

Öll HTML skjöl byggjá á grunn elementum:

* `<html>` skilgreinir rót HTML vefs, skilgreinum tungumál með `lang` attribute
* `<head>` er yfirleitt fyrsta barn `<html>` og heldur utan um lýsigögn vefsíðu
* `<body>` skilgreinir meginmál vefs

***

## DTD & DOCTYPE

* [Document Type Definition](http://en.wikipedia.org/wiki/Document_type_declaration) (DTD) skilgreinir markup fyrir SGML mál
* [DocType](http://en.wikipedia.org/wiki/Document_type_declaration), eða Document type declaration, skilgreinir hvort og þá hvaða DTD við skrifum eftir

***

## DocType dæmi

```html
<!DOCTYPE HTML PUBLIC
  "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd"
>
```

***

## Af hverju DocType í dag?

* Arfleið frá eldri tíma, segir til um hvort vafri eigi að nota _standards mode_ eða _quirks mode_
* Ef ekkert DOCTYPE þá er quirks mode notað – vafri gerir ráð fyrir að síðan noti eldri, úrelta tækni til að birta síðu
* Ef DOCTYPE bendir á rétt, staðlað DTD er standards mode notað

***

## HTML5

* HTML5 byggir ekki á SGML en er samhæft fyrri útgáfum (backwards compatible)
* Stefnan að auka samvirkni (interoperability) og aðgengi að vefnum
* Brösótt saga, en skilgreint sem fimmta útgáfa HTML í október 2014

***

## HTML5 DocType

Til að vera að fullu samhæft fyrri útgáfum þarf HTML5 að skilgreina DOCTYPE:

```html
<!doctype html>
```

Þetta er _eina_ DOCTYPE sem við notum.

***

## Stafasett

* Skilgreinum stafasett í `<head>`
* `<meta charset="utf-8">`

---

## Minnsta HTML5 skjalið

```html
<!doctype html>
<html lang="is">
  <head>
    <meta charset="utf-8">
    <title>Halló heimur</title>
  </head>
  <body>
    <p>Halló heimur</p>
  </body>
</html>
```
