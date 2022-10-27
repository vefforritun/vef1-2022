/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

// Hversu nákvæmlega viljum við logga, eða halda utanum stöðu?

// 1. Ekki mikið, hópum öllum mögulegum villum saman
async function fetchWithSomeErrorHandling(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Eiginlegt svindl, vitum að við erum innan try
      throw new Error('response not ok');
    }

    // Blöndum villumeðhöndlun við meðhöndlun á exception frá fetch
    return await response.json();
  } catch (e) {
    // Öll villumeðhöndlun á einum stað, getur orðið erfitt að finna/vinna
    // úr villuskilaboðum
    console.error('error!', e);
    return null;
  }
}

// 2. Mikið, grípum alla mögulega punkta sem geta klikkað og athugum stöðu
async function fetchWithDetailedErrorHandling(url) {
  let response;
  try {
    response = fetch(url);
  } catch (e) {
    console.error(`error fetching from ${url}`, e);
    return null;
  }

  if (!response.ok) {
    // Hugsanleg gæti response innihaldið upplýsingar um hvað klikkaði
    let errorText;

    try {
      errorText = await response.text();
    } catch (e) {
      // Óþarfi að logga nokkuð hér
    } finally {
      // Oft viljum við logga að við höfum klárað kall í vefþjónustu
      // t.d. til að mæla hversu langan tíma kallið tók, óháð því hvort
      // villa komi upp eða ekki
      console.info(`called ${url}`);
    }

    console.error(
      response,
      `non 200 status fetching from ${url}`,
      response.status,
      errorText,
    );
    return null;
  }

  let json;
  try {
    json = await response.json();
  } catch (e) {
    console.error(`error parsing json from ${url}`, e);
    return null;
  }

  return json;
}
