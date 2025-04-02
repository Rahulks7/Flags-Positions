import React, { useEffect, useState } from "react";
import "./Flags.css"; 
const flagUrls = [
"https://flagcdn.com/w320/af.png", // Afghanistan //
"https://flagcdn.com/w320/al.png", // Albania
"https://flagcdn.com/w320/dz.png", // Algeria
"https://flagcdn.com/w320/ad.png", // Andorra
"https://flagcdn.com/w320/ao.png", // Angola
"https://flagcdn.com/w320/ag.png", // Antigua and Barbuda
"https://flagcdn.com/w320/ar.png", // Argentina
"https://flagcdn.com/w320/am.png", // Armenia
"https://flagcdn.com/w320/au.png", // Australia
"https://flagcdn.com/w320/at.png", // Austria
"https://flagcdn.com/w320/az.png", // Azerbaijan
"https://flagcdn.com/w320/bs.png", // Bahamas
"https://flagcdn.com/w320/bh.png", // Bahrain
"https://flagcdn.com/w320/bd.png", // Bangladesh
"https://flagcdn.com/w320/bb.png", // Barbados
"https://flagcdn.com/w320/by.png", // Belarus
"https://flagcdn.com/w320/be.png", // Belgium
"https://flagcdn.com/w320/bz.png", // Belize
"https://flagcdn.com/w320/bj.png", // Benin
"https://flagcdn.com/w320/bt.png", // Bhutan
"https://flagcdn.com/w320/bo.png", // Bolivia
"https://flagcdn.com/w320/ba.png", // Bosnia and Herzegovina
"https://flagcdn.com/w320/bw.png", // Botswana
"https://flagcdn.com/w320/br.png", // Brazil
"https://flagcdn.com/w320/bn.png", // Brunei
"https://flagcdn.com/w320/bg.png", // Bulgaria
"https://flagcdn.com/w320/bf.png", // Burkina Faso
"https://flagcdn.com/w320/bi.png", // Burundi
"https://flagcdn.com/w320/cv.png", // Cabo Verde
"https://flagcdn.com/w320/kh.png", // Cambodia
"https://flagcdn.com/w320/cm.png", // Cameroon
"https://flagcdn.com/w320/ca.png", // Canada
"https://flagcdn.com/w320/cf.png", // Central African Republic
"https://flagcdn.com/w320/td.png", // Chad
"https://flagcdn.com/w320/cl.png", // Chile
"https://flagcdn.com/w320/cn.png", // China
"https://flagcdn.com/w320/co.png", // Colombia
"https://flagcdn.com/w320/km.png", // Comoros
"https://flagcdn.com/w320/cg.png", // Republic of the Congo
"https://flagcdn.com/w320/cd.png", // Democratic Republic of the Congo
"https://flagcdn.com/w320/cr.png", // Costa Rica
"https://flagcdn.com/w320/hr.png", // Croatia
"https://flagcdn.com/w320/cu.png", // Cuba
"https://flagcdn.com/w320/cy.png", // Cyprus
"https://flagcdn.com/w320/cz.png", // Czech Republic (Czechia)
"https://flagcdn.com/w320/dk.png", // Denmark
"https://flagcdn.com/w320/dj.png", // Djibouti
"https://flagcdn.com/w320/dm.png", // Dominica
"https://flagcdn.com/w320/do.png", // Dominican Republic
"https://flagcdn.com/w320/tl.png", // East Timor (Timor-Leste)
"https://flagcdn.com/w320/ec.png", // Ecuador
"https://flagcdn.com/w320/eg.png", // Egypt
"https://flagcdn.com/w320/sv.png", // El Salvador
"https://flagcdn.com/w320/gq.png", // Equatorial Guinea
"https://flagcdn.com/w320/er.png", // Eritrea
"https://flagcdn.com/w320/ee.png", // Estonia
"https://flagcdn.com/w320/sz.png", // Eswatini (formerly Swaziland)
"https://flagcdn.com/w320/et.png", // Ethiopia
"https://flagcdn.com/w320/fj.png", // Fiji
"https://flagcdn.com/w320/fi.png", // Finland
"https://flagcdn.com/w320/fr.png", // France
"https://flagcdn.com/w320/ga.png", // Gabon
"https://flagcdn.com/w320/gm.png", // Gambia
"https://flagcdn.com/w320/ge.png", // Georgia
"https://flagcdn.com/w320/de.png", // Germany
"https://flagcdn.com/w320/gh.png", // Ghana
"https://flagcdn.com/w320/gr.png", // Greece
"https://flagcdn.com/w320/gd.png", // Grenada
"https://flagcdn.com/w320/gt.png", // Guatemala
"https://flagcdn.com/w320/gn.png", // Guinea
"https://flagcdn.com/w320/gw.png", // Guinea-Bissau
"https://flagcdn.com/w320/gy.png", // Guyana
"https://flagcdn.com/w320/ht.png", // Haiti
"https://flagcdn.com/w320/hn.png", // Honduras
"https://flagcdn.com/w320/hu.png", // Hungary
"https://flagcdn.com/w320/is.png", // Iceland
"https://flagcdn.com/w320/in.png", // India
"https://flagcdn.com/w320/id.png", // Indonesia
"https://flagcdn.com/w320/ir.png", // Iran
"https://flagcdn.com/w320/iq.png", // Iraq
"https://flagcdn.com/w320/ie.png", // Ireland
"https://flagcdn.com/w320/il.png", // Israel
"https://flagcdn.com/w320/it.png", // Italy
"https://flagcdn.com/w320/ci.png", // Ivory Coast (Côte d'Ivoire)
"https://flagcdn.com/w320/jm.png", // Jamaica
"https://flagcdn.com/w320/jp.png", // Japan
"https://flagcdn.com/w320/jo.png", // Jordan
"https://flagcdn.com/w320/kz.png", // Kazakhstan
"https://flagcdn.com/w320/ke.png", // Kenya
"https://flagcdn.com/w320/ki.png", // Kiribati
"https://flagcdn.com/w320/kp.png", // North Korea
"https://flagcdn.com/w320/kr.png", // South Korea
"https://flagcdn.com/w320/kw.png", // Kuwait
"https://flagcdn.com/w320/kg.png", // Kyrgyzstan
"https://flagcdn.com/w320/la.png", // Laos
"https://flagcdn.com/w320/lv.png", // Latvia
"https://flagcdn.com/w320/lb.png", // Lebanon
"https://flagcdn.com/w320/ls.png", // Lesotho
"https://flagcdn.com/w320/lr.png", // Liberia
"https://flagcdn.com/w320/ly.png", // Libya
"https://flagcdn.com/w320/li.png", // Liechtenstein
"https://flagcdn.com/w320/lt.png", // Lithuania
"https://flagcdn.com/w320/lu.png", // Luxembourg
"https://flagcdn.com/w320/mg.png", // Madagascar
"https://flagcdn.com/w320/mw.png", // Malawi
"https://flagcdn.com/w320/my.png", // Malaysia
"https://flagcdn.com/w320/mv.png", // Maldives
"https://flagcdn.com/w320/ml.png", // Mali
"https://flagcdn.com/w320/mt.png", // Malta
"https://flagcdn.com/w320/mh.png", // Marshall Islands
"https://flagcdn.com/w320/mr.png", // Mauritania
"https://flagcdn.com/w320/mu.png", // Mauritius
"https://flagcdn.com/w320/mx.png", // Mexico
"https://flagcdn.com/w320/fm.png", // Micronesia
"https://flagcdn.com/w320/md.png", // Moldova
"https://flagcdn.com/w320/mc.png", // Monaco
"https://flagcdn.com/w320/mn.png", // Mongolia
"https://flagcdn.com/w320/me.png", // Montenegro
"https://flagcdn.com/w320/ma.png", // Morocco
"https://flagcdn.com/w320/mz.png", // Mozambique
"https://flagcdn.com/w320/mm.png", // Myanmar (Burma)
"https://flagcdn.com/w320/na.png", // Namibia
"https://flagcdn.com/w320/nr.png", // Nauru
"https://flagcdn.com/w320/np.png", // Nepal
"https://flagcdn.com/w320/nl.png", // Netherlands
"https://flagcdn.com/w320/nz.png", // New Zealand
"https://flagcdn.com/w320/ni.png", // Nicaragua
"https://flagcdn.com/w320/ne.png", // Niger
"https://flagcdn.com/w320/ng.png", // Nigeria
"https://flagcdn.com/w320/mk.png", // North Macedonia
"https://flagcdn.com/w320/no.png", // Norway
"https://flagcdn.com/w320/om.png", // Oman
"https://flagcdn.com/w320/pk.png", // Pakistan
"https://flagcdn.com/w320/ps.png", // Palestine
"https://flagcdn.com/w320/pa.png", // Panama
"https://flagcdn.com/w320/pg.png", // Papua New Guinea
"https://flagcdn.com/w320/py.png", // Paraguay
"https://flagcdn.com/w320/pe.png", // Peru
"https://flagcdn.com/w320/ph.png", // Philippines
"https://flagcdn.com/w320/pl.png", // Poland
"https://flagcdn.com/w320/pt.png", // Portugal
"https://flagcdn.com/w320/qa.png", // Qatar
"https://flagcdn.com/w320/ro.png", // Romania
"https://flagcdn.com/w320/ru.png", // Russia
"https://flagcdn.com/w320/rw.png", // Rwanda
"https://flagcdn.com/w320/kn.png", // Saint Kitts and Nevis
"https://flagcdn.com/w320/lc.png", // Saint Lucia
"https://flagcdn.com/w320/vc.png", // Saint Vincent and the Grenadines
"https://flagcdn.com/w320/ws.png", // Samoa
"https://flagcdn.com/w320/sm.png", // San Marino
"https://flagcdn.com/w320/st.png", // Sao Tome and Principe
"https://flagcdn.com/w320/sa.png", // Saudi Arabia
"https://flagcdn.com/w320/sn.png", // Senegal
"https://flagcdn.com/w320/rs.png", // Serbia
"https://flagcdn.com/w320/sc.png", // Seychelles
"https://flagcdn.com/w320/sl.png", // Sierra Leone
"https://flagcdn.com/w320/sg.png", // Singapore
"https://flagcdn.com/w320/sk.png", // Slovakia
"https://flagcdn.com/w320/si.png", // Slovenia
"https://flagcdn.com/w320/sb.png", // Solomon Islands
"https://flagcdn.com/w320/so.png", // Somalia
"https://flagcdn.com/w320/za.png", // South Africa
"https://flagcdn.com/w320/ss.png", // South Sudan
"https://flagcdn.com/w320/es.png", // Spain
"https://flagcdn.com/w320/lk.png", // Sri Lanka
"https://flagcdn.com/w320/sd.png", // Sudan
"https://flagcdn.com/w320/sr.png", // Suriname
"https://flagcdn.com/w320/se.png", // Sweden
"https://flagcdn.com/w320/ch.png", // Switzerland
"https://flagcdn.com/w320/sy.png", // Syria
"https://flagcdn.com/w320/tw.png", // Taiwan
"https://flagcdn.com/w320/tj.png", // Tajikistan
"https://flagcdn.com/w320/tz.png", // Tanzania
"https://flagcdn.com/w320/th.png", // Thailand
"https://flagcdn.com/w320/tg.png", // Togo
"https://flagcdn.com/w320/to.png", // Tonga
"https://flagcdn.com/w320/tt.png", // Trinidad and Tobago
"https://flagcdn.com/w320/tn.png", // Tunisia
"https://flagcdn.com/w320/tr.png", // Turkey
"https://flagcdn.com/w320/tm.png", // Turkmenistan
"https://flagcdn.com/w320/tv.png", // Tuvalu
"https://flagcdn.com/w320/ug.png", // Uganda
"https://flagcdn.com/w320/ua.png", // Ukraine
"https://flagcdn.com/w320/ae.png", // United Arab Emirates
"https://flagcdn.com/w320/gb.png", // United Kingdom
"https://flagcdn.com/w320/us.png", // United States
"https://flagcdn.com/w320/uy.png", // Uruguay
"https://flagcdn.com/w320/uz.png", // Uzbekistan
"https://flagcdn.com/w320/vu.png", // Vanuatu
"https://flagcdn.com/w320/va.png", // Vatican City (Holy See)
"https://flagcdn.com/w320/ve.png", // Venezuela
"https://flagcdn.com/w320/vn.png", // Vietnam
"https://flagcdn.com/w320/ye.png", // Yemen
"https://flagcdn.com/w320/zm.png", // Zambia
"https://flagcdn.com/w320/zw.png", // Zimbabwe



];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Flags = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    setFlags(shuffleArray([...flagUrls]));
  }, []);

  return (
    <div className="flags-container">
      {flags.map((flag, index) => (
        <img key={index} src={flag} alt={`Flag ${index}`} className="flag" />
      ))}
    </div>
  );
};

export default Flags;
