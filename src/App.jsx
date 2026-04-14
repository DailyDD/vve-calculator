import { useState } from 'react'

const LOGO = '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'

const fmt = (n) => {
  if (n === null || n === undefined || isNaN(n)) return '—'
  return '€ ' + Number(n).toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
const today = () => new Date().toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
let _id = 0
const uid = () => ++_id

const S = {
  bordeaux: '#991A21', bordeauxDark: '#6B1217', bordeauxLight: '#F5E6E7',
  cream: '#FAF7F2', ink: '#1A1614', muted: '#8A7E7B', border: '#E5DEDA',
  green: '#2D6A4F', greenBg: '#EAF4EE', amber: '#92550A', amberBg: '#FEF3E2',
  redBg: '#FDEAEB', blue: '#1A4D7A', blueBg: '#EAF1F8',
}

function buildExploitatieRows(r) {
  const rows = []
  if (r.verzekering)   rows.push(['Opstalverzekering', fmt(r.verzekering)])
  if (r.administratie) rows.push(['Administratie/beheer', fmt(r.administratie)])
  if (r.bankkosten)    rows.push(['Bankkosten', fmt(r.bankkosten)])
  if (r.overig)        rows.push(['Overig', fmt(r.overig)])
  r.extraKosten.forEach(e => { if (e.bedrag) rows.push([e.naam || 'Extra post', fmt(e.bedrag)]) })
  return rows
}

function exportPDF(r) {
  const eigenRows = r.eigenaren.map((e, i) => {
    const bg = i % 2 === 0 ? '#ffffff' : '#FAF7F2'
    const deltaStr = (nieuw, huidig) => {
      if (nieuw === null || huidig === null) return '—'
      const diff = nieuw - huidig
      const pct = (diff / huidig * 100)
      const sign = diff > 0.005 ? '+' : ''
      const color = diff < -0.005 ? '#2D6A4F' : diff > 0.005 ? '#C0392B' : '#1A4D7A'
      return '<span style="color:' + color + ';font-weight:600">' + sign + fmt(diff) + ' (' + sign + pct.toFixed(1) + '%)</span>'
    }
    return '<tr style="background:' + bg + '"><td>' + e.naam + '</td><td style="text-align:right">' + e.teller + '/' + e.noemer + '</td><td style="text-align:right">' + (e.aandeel * 100).toFixed(2) + '%</td><td style="text-align:right">' + (e.huidig !== null ? fmt(e.huidig) : '—') + '</td><td style="text-align:right">' + (e.bijdrMjop !== null ? fmt(e.bijdrMjop) : '—') + '</td><td>' + deltaStr(e.bijdrMjop, e.huidig) + '</td><td style="text-align:right">' + (e.bijdr05 !== null ? fmt(e.bijdr05) : '—') + '</td><td>' + deltaStr(e.bijdr05, e.huidig) + '</td></tr>'
  }).join('')
  const totMjop = r.hasMjop ? fmt(r.eigenaren.reduce((s, e) => s + (e.bijdrMjop || 0), 0)) : '—'
  const tot05 = r.has05 ? fmt(r.eigenaren.reduce((s, e) => s + (e.bijdr05 || 0), 0)) : '—'
  const rr = (l, v) => '<div class="rr"><span class="rl">' + l + '</span><span class="rv">' + v + '</span></div>'
  const rrB = (l, v) => '<div class="rr"><span class="rl">' + l + '</span><span class="rv big">' + v + '</span></div>'
  const exploRows = buildExploitatieRows(r)
  const exploHTML = exploRows.map(([l, v]) => rr(l, v)).join('')

  const html = '<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><title>VvE Bijdrage – ' + r.complexNaam + '</title>'
    + '<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">'
    + '<style>'
    + '*{box-sizing:border-box;margin:0;padding:0}'
    + 'body{font-family:"DM Sans",Arial,sans-serif;color:#1A1614;font-size:10pt;background:#fff;padding:32px 40px}'
    + '.hdr{display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:12px;border-bottom:3px solid #991A21;margin-bottom:22px}'
    + '.hdr img{height:52px}'
    + '.hdr h1{font-family:"DM Serif Display",serif;font-size:18pt;color:#991A21;font-weight:400}'
    + '.hdr .meta{font-size:9pt;color:#8A7E7B;margin-top:3px}'
    + '.intro{background:#FAF7F2;border-left:4px solid #991A21;padding:12px 16px;border-radius:4px;margin-bottom:20px;font-size:9pt;color:#8A7E7B}'
    + '.intro strong{color:#1A1614;font-size:10pt}'
    + '.sec{font-size:8pt;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#8A7E7B;margin:18px 0 8px;padding-bottom:4px;border-bottom:1px solid #E5DEDA}'
    + '.grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}'
    + '.block{border:1px solid #E5DEDA;border-radius:6px;overflow:hidden}'
    + '.bh{background:#991A21;padding:8px 12px}'
    + '.bh .tag{font-size:7.5pt;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.05em}'
    + '.bh .name{font-family:"DM Serif Display",serif;font-size:13pt;color:#fff;font-weight:400}'
    + '.rr{display:flex;justify-content:space-between;padding:5px 12px;border-bottom:1px solid #E5DEDA;font-size:9pt}'
    + '.rr:last-child{border:none}'
    + '.rl{color:#8A7E7B}.rv{font-weight:500}'
    + '.rv.big{font-family:"DM Serif Display",serif;font-size:15pt;color:#991A21;font-weight:400}'
    + '.subtotaal{background:#FAF7F2;font-weight:600}'
    + 'table{width:100%;border-collapse:collapse;font-size:9pt}'
    + 'thead tr{background:#991A21;color:#fff}'
    + 'thead th{padding:7px 10px;text-align:left;font-size:8pt;font-weight:600;text-transform:uppercase;letter-spacing:.04em}'
    + 'thead th:not(:first-child){text-align:right}'
    + 'tbody td{padding:6px 10px;border-bottom:1px solid #E5DEDA}'
    + 'tfoot td{padding:7px 10px;font-weight:600;color:#991A21;border-top:2px solid #991A21;background:#F5E6E7}'
    + '.note{margin-top:24px;padding:12px 16px;background:#FAF7F2;border-left:4px solid #991A21;font-size:8.5pt;color:#8A7E7B;border-radius:4px}'
    + '.footer{margin-top:20px;padding-top:8px;border-top:1px solid #E5DEDA;display:flex;justify-content:space-between;font-size:7.5pt;color:#8A7E7B}'
    + '.print-btn{position:fixed;top:18px;right:18px;padding:9px 18px;background:#991A21;color:#fff;border:none;border-radius:8px;font-size:13px;cursor:pointer;font-family:sans-serif;box-shadow:0 2px 8px rgba(0,0,0,.2)}'
    + '@media print{body{padding:16px 20px}.print-btn{display:none}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}'
    + '</style></head><body>'
    + '<button class="print-btn" onclick="window.print()">🖨 Afdrukken / PDF</button>'
    + '<div class="hdr"><div><h1>Reservefonds Bijdrage Rapport</h1><div class="meta">' + r.complexNaam + ' · Opgesteld op ' + today() + '</div></div><img src="data:image/png;base64,' + LOGO + '" alt="Totaal VvE Beheer"></div>'
    + '<div class="intro"><strong>' + r.complexNaam + '</strong><br>Berekening minimale maandelijkse bijdrage reservefonds conform art. 5:126 BW — opgesteld ' + today() + '.</div>'

    + '<div class="sec">Methode 1 — Op basis van MJOP (wettelijke voorkeur)</div>'
    + '<div class="grid2">'
    + '<div class="block"><div class="bh"><div class="tag">MJOP berekening</div><div class="name">Jaarlijkse dotatie</div></div>'
    + rr('Totale MJOP-kosten', fmt(r.mjopTotaal)) + rr('Planperiode', r.planPeriode + ' jaar') + rr('Jaarlijkse MJOP-dotatie', fmt(r.dotatie))
    + '</div>'
    + '<div class="block"><div class="bh"><div class="tag">Totale jaarlasten VvE</div><div class="name">Uitgesplitst</div></div>'
    + rr('MJOP-dotatie', fmt(r.dotatie))
    + exploHTML
    + '<div class="rr subtotaal"><span class="rl">Totale jaarlasten VvE</span><span class="rv">' + fmt(r.jaarMjop) + '</span></div>'
    + rrB('Maandlasten VvE totaal', r.hasMjop ? fmt(r.mndMjop) : '—')
    + '</div></div>'

    + '<div class="sec">Methode 2 — 0,5% van herbouwwaarde (wettelijk minimum)</div>'
    + '<div class="grid2">'
    + '<div class="block"><div class="bh"><div class="tag">Herbouwwaarde</div><div class="name">0,5% reservering</div></div>'
    + rr('Herbouwwaarde', fmt(r.herbouwwaarde)) + rr('0,5% jaarlijkse reservering', fmt(r.jaar05)) + rr('Van toepassing bij', '<span style="font-style:italic">geen/oud MJOP</span>')
    + '</div>'
    + '<div class="block"><div class="bh"><div class="tag">Totale jaarlasten VvE</div><div class="name">Uitgesplitst</div></div>'
    + rr('0,5% reservering', fmt(r.jaar05))
    + exploHTML
    + '<div class="rr subtotaal"><span class="rl">Totale jaarlasten VvE</span><span class="rv">' + fmt(r.jaar05Totaal) + '</span></div>'
    + rrB('Maandlasten VvE totaal', r.has05 ? fmt(r.mnd05) : '—')
    + '</div></div>'

    + '<div class="sec">Maandelijkse bijdrage per eigenaar</div>'
    + '<table><thead><tr><th>Eigenaar</th><th style="text-align:right">Breukdeel</th><th style="text-align:right">Aandeel</th><th style="text-align:right">Huidig/mnd</th><th style="text-align:right">MJOP/mnd</th><th>Δ MJOP</th><th style="text-align:right">0,5%/mnd</th><th>Δ 0,5%</th></tr></thead>'
    + '<tbody>' + eigenRows + '</tbody>'
    + '<tfoot><tr><td><strong>Totaal VvE</strong></td><td></td><td style="text-align:right">100%</td><td style="text-align:right">' + fmt(r.eigenaren.reduce((s,e)=>s+(e.huidig||0),0)) + '</td><td style="text-align:right">' + totMjop + '</td><td></td><td style="text-align:right">' + tot05 + '</td><td></td></tr></tfoot>'
    + '</table>'
    + '<div class="sec">Jaarlijkse reservering voor onderhoud — VvE totaal</div>'
    + '<p style="font-size:8.5pt;color:#8A7E7B;margin-bottom:10px">Reservering = (totale maandelijkse bijdragen × 12) − exploitatiekosten. Wat de VvE per jaar spaart voor onderhoud.</p>'
    + '<table><thead><tr><th>Situatie</th><th>Toelichting</th><th style="text-align:right">Jaarlijkse reservering</th></tr></thead>'
    + '<tbody>'
    + '<tr style="background:#ffffff"><td><strong>Huidig</strong></td><td style="color:#8A7E7B">Op basis van huidige bijdragen</td><td style="text-align:right;font-weight:600;color:'+(r.jaarResHuidig!==null?(r.jaarResHuidig>=0?'#2D6A4F':'#C0392B'):'#8A7E7B')+'">'+(r.jaarResHuidig!==null?fmt(r.jaarResHuidig):'—')+'</td></tr>'
    + '<tr style="background:#FAF7F2"><td><strong>Op basis van MJOP</strong></td><td style="color:#8A7E7B">Nieuwe bijdrage methode 1</td><td style="text-align:right;font-weight:600;color:'+(r.jaarResMjop!==null?(r.jaarResMjop>=0?'#2D6A4F':'#C0392B'):'#8A7E7B')+'">'+(r.jaarResMjop!==null?fmt(r.jaarResMjop):'—')+'</td></tr>'
    + '<tr style="background:#ffffff"><td><strong>Op basis van 0,5%</strong></td><td style="color:#8A7E7B">Nieuwe bijdrage methode 2</td><td style="text-align:right;font-weight:600;color:'+(r.jaarRes05!==null?(r.jaarRes05>=0?'#2D6A4F':'#C0392B'):'#8A7E7B')+'">'+(r.jaarRes05!==null?fmt(r.jaarRes05):'—')+'</td></tr>'
    + '</tbody></table>'
    + '<div class="note"><strong>Toelichting:</strong> Methode 1 (MJOP) verdient de voorkeur bij een actueel MJOP (&lt;5 jaar oud). Methode 2 (0,5%) is het wettelijk minimum conform art. 5:126 lid 3 BW (v.a. 1 jan 2021). Genoemde bedragen zijn minimale bijdragen — een aanvullende buffer is aan te raden.</div>'
    + '<div class="footer"><span>Totaal VvE Beheer Den Haag en omstreken B.V. · Rijswijk</span><span>' + today() + '</span></div>'
    + '</body></html>'

  const w = window.open('', '_blank', 'width=1050,height=850')
  if (w) { w.document.write(html); w.document.close() }
  else alert('Pop-up geblokkeerd. Sta pop-ups toe voor deze pagina.')
}

export default function App() {
  const [complexNaam,   setComplexNaam]   = useState('')
  const [herbouwwaarde, setHerbouwwaarde] = useState('')
  const [mjopTotaal,    setMjopTotaal]    = useState('')
  const [planPeriode,   setPlanPeriode]   = useState('10')
  const [verzekering,   setVerzekering]   = useState('')
  const [administratie, setAdministratie] = useState('')
  const [bankkosten,    setBankkosten]    = useState('')
  const [overig,        setOverig]        = useState('')
  const [extraKosten,   setExtraKosten]   = useState([])
  const [rows,          setRows]          = useState([
    { id: uid(), naam: '', teller: '', noemer: '', huidig: '' },
    { id: uid(), naam: '', teller: '', noemer: '', huidig: '' },
    { id: uid(), naam: '', teller: '', noemer: '', huidig: '' },
  ])
  const [result, setResult] = useState(null)
  const [error,  setError]  = useState('')

  const addExtraKost = () => setExtraKosten(p => [...p, { id: uid(), naam: '', bedrag: '' }])
  const delExtraKost = (id) => setExtraKosten(p => p.filter(e => e.id !== id))
  const updExtraKost = (id, f, v) => setExtraKosten(p => p.map(e => e.id === id ? { ...e, [f]: v } : e))

  const formula = (() => {
    const t = parseFloat(mjopTotaal) || 0
    const p = parseFloat(planPeriode) || 10
    if (!t) return 'Jaarlijkse dotatie = Totale MJOP-kosten ÷ Planperiode'
    return fmt(t) + ' ÷ ' + p + ' jaar = ' + fmt(t / p) + ' jaarlijkse dotatie'
  })()

  const breukCheck = (() => {
    const filled = rows.filter(r => r.teller !== '' && r.noemer !== '' && parseFloat(r.noemer) > 0)
    if (!filled.length) return null
    const total = filled.reduce((s, r) => s + parseFloat(r.teller) / parseFloat(r.noemer), 0)
    return { ok: Math.abs(total - 1) < 0.0011, pct: (total * 100).toFixed(3) }
  })()

  const addRow = () => setRows(p => [...p, { id: uid(), naam: '', teller: '', noemer: '', huidig: '' }])
  const delRow = (id) => setRows(p => p.filter(r => r.id !== id))
  const updRow = (id, f, v) => setRows(p => p.map(r => r.id === id ? { ...r, [f]: v } : r))

  const bereken = () => {
    setError('')
    const hv = parseFloat(herbouwwaarde) || 0
    const mt = parseFloat(mjopTotaal) || 0
    const pp = parseFloat(planPeriode) || 10
    const vz = parseFloat(verzekering) || 0
    const ad = parseFloat(administratie) || 0
    const bk = parseFloat(bankkosten) || 0
    const ov = parseFloat(overig) || 0
    const extraTotaal = extraKosten.reduce((s, e) => s + (parseFloat(e.bedrag) || 0), 0)
    const validRows = rows.filter(r => r.teller !== '' && r.noemer !== '' && parseFloat(r.noemer) > 0)
    if (!validRows.length) { setError('Voeg eerst eigenaren toe met breukdelen.'); return }
    if (!hv && !mt) { setError('Vul minimaal de herbouwwaarde of MJOP-kosten in.'); return }
    const dotatie   = mt > 0 ? mt / pp : 0
    const exploit   = vz + ad + bk + ov + extraTotaal
    const jaarMjop  = dotatie + exploit
    const mndMjop   = jaarMjop / 12
    const jaar05    = hv * 0.005
    const jaarTot05 = jaar05 + exploit
    const mnd05     = jaarTot05 / 12
    const totalFrac = validRows.reduce((s, r) => s + parseFloat(r.teller) / parseFloat(r.noemer), 0)
    const eigenaren = validRows.map(r => {
      const frac = parseFloat(r.teller) / parseFloat(r.noemer)
      const aandeel = totalFrac > 0 ? frac / totalFrac : 0
      const huidig = parseFloat(r.huidig) || null
      return { naam: r.naam || ('App. ' + r.id), teller: r.teller, noemer: r.noemer, aandeel, huidig, bijdrMjop: mt > 0 ? aandeel * mndMjop : null, bijdr05: hv > 0 ? aandeel * mnd05 : null }
    })
    const somHuidig = validRows.reduce((s, r) => s + (parseFloat(r.huidig) || 0), 0)
    const jaarResHuidig = somHuidig > 0 ? (somHuidig * 12) - exploit : null
    const jaarResMjop   = mt > 0 ? (mndMjop * 12) - exploit : null
    const jaarRes05     = hv > 0 ? (mnd05   * 12) - exploit : null
    setResult({
      complexNaam: complexNaam || 'Complex', mjopTotaal: mt, planPeriode: pp, dotatie,
      verzekering: vz, administratie: ad, bankkosten: bk, overig: ov,
      extraKosten: extraKosten.map(e => ({ naam: e.naam, bedrag: parseFloat(e.bedrag) || 0 })),
      exploitatie: exploit, jaarMjop, mndMjop, hasMjop: mt > 0,
      herbouwwaarde: hv, jaar05, jaar05Totaal: jaarTot05, mnd05, has05: hv > 0, eigenaren,
      jaarResHuidig, jaarResMjop, jaarRes05
    })
    setTimeout(() => document.getElementById('res-anker')?.scrollIntoView({ behavior: 'smooth' }), 50)
  }

  return (
    <div>
      <div style={{ background: S.bordeaux, padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 40, height: 40, background: 'rgba(255,255,255,.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia,serif', fontSize: 20, color: '#fff' }}>V</div>
        <div>
          <div style={{ fontFamily: 'Georgia,serif', fontSize: 19, color: '#fff' }}>VvE Bijdrage Calculator</div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 }}>Totaal VvE Beheer · Maandelijkse bijdrage reservefonds</div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '28px 20px 80px' }}>
        <SecTitle>Stap 1 — Algemene gegevens</SecTitle>
        <Card header={<CardHdr icon="🏢" bg={S.redBg} title="Complexgegevens" sub="Naam en herbouwwaarde" />}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: '18px 20px' }}>
            <Field label="Naam complex"><Inp placeholder="bijv. VvE Reinkenstraat 1–24" value={complexNaam} onChange={e => setComplexNaam(e.target.value)} /></Field>
            <Field label="Herbouwwaarde (€)"><Inp type="number" placeholder="bijv. 2500000" value={herbouwwaarde} onChange={e => setHerbouwwaarde(e.target.value)} /></Field>
          </div>
        </Card>

        <SecTitle>Stap 2 — MJOP gegevens</SecTitle>
        <Card header={<CardHdr icon="📋" bg={S.amberBg} title="Meerjarenonderhoudsplan (MJOP)" sub="Totale kosten over de planperiode" />}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: '18px 20px 0' }}>
            <Field label="Totale MJOP-kosten (€)"><Inp type="number" placeholder="bijv. 150000" value={mjopTotaal} onChange={e => setMjopTotaal(e.target.value)} /></Field>
            <Field label="Planperiode (jaren)"><Inp type="number" placeholder="10" value={planPeriode} onChange={e => setPlanPeriode(e.target.value)} /></Field>
          </div>
          <div style={{ margin: '10px 20px 18px', padding: '9px 13px', background: S.cream, border: '1px solid ' + S.border, borderRadius: 7, fontFamily: 'monospace', fontSize: 12, color: S.muted }}>{formula}</div>
        </Card>

        <SecTitle>Stap 3 — Overige exploitatiekosten (jaarlijks)</SecTitle>
        <Card header={<CardHdr icon="💼" bg={S.blueBg} title="Exploitatiekosten" sub="Buiten het MJOP — worden per post getoond in het rapport" />}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, padding: '18px 20px 14px' }}>
            <Field label="Opstalverzekering (€/jaar)"><Inp type="number" placeholder="bijv. 3200" value={verzekering} onChange={e => setVerzekering(e.target.value)} /></Field>
            <Field label="Administratie/beheer (€/jaar)"><Inp type="number" placeholder="bijv. 2400" value={administratie} onChange={e => setAdministratie(e.target.value)} /></Field>
            <Field label="Bankkosten (€/jaar)"><Inp type="number" placeholder="bijv. 250" value={bankkosten} onChange={e => setBankkosten(e.target.value)} /></Field>
            <Field label="Overig (€/jaar)"><Inp type="number" placeholder="bijv. 800" value={overig} onChange={e => setOverig(e.target.value)} /></Field>
          </div>

          {extraKosten.length > 0 && (
            <div style={{ padding: '0 20px 8px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: S.muted, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Extra kostenposten</div>
              {extraKosten.map((e) => (
                <div key={e.id} style={{ display: 'grid', gridTemplateColumns: '1fr 180px 36px', gap: 8, marginBottom: 8, alignItems: 'center' }}>
                  <Inp placeholder="Naam kostenpost (bijv. Liftonderhoud)" value={e.naam} onChange={v => updExtraKost(e.id, 'naam', v.target.value)} />
                  <Inp type="number" placeholder="€/jaar" value={e.bedrag} onChange={v => updExtraKost(e.id, 'bedrag', v.target.value)} />
                  <button onClick={() => delExtraKost(e.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: S.muted, padding: '6px', borderRadius: 4, textAlign: 'center' }}>×</button>
                </div>
              ))}
            </div>
          )}

          <button onClick={addExtraKost} style={{ margin: '4px 20px 14px', padding: '8px 14px', background: '#fff', border: '1.5px dashed ' + S.border, borderRadius: 8, fontFamily: 'inherit', fontSize: 13, color: S.muted, cursor: 'pointer', width: 'calc(100% - 40px)' }}>
            + Extra kostenpost toevoegen
          </button>
        </Card>

        <SecTitle>Stap 4 — Eigenaren &amp; breukdelen</SecTitle>
        <Card header={<CardHdr icon="👥" bg={S.greenBg} title="Eigenaren" sub="Naam en breukdeel conform splitsingsakte" />}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: S.cream, borderBottom: '1px solid ' + S.border }}>
                  {['#','Naam / appartement','Breukdeel teller','Breukdeel noemer','Huidige bijdrage (€/mnd)',''].map((h,i) => (
                    <th key={i} style={{ padding: '8px 10px', textAlign: 'left', fontSize: 10, fontWeight: 600, color: S.muted, textTransform: 'uppercase', letterSpacing: '0.06em', width: [36,null,120,120,160,44][i] }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.id} style={{ borderBottom: i < rows.length - 1 ? '1px solid ' + S.border : 'none' }}>
                    <td style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: 11, color: S.muted, padding: '7px 8px' }}>{i + 1}</td>
                    <td style={{ padding: '5px 6px' }}><Inp placeholder="bijv. App. 1 · De Vries" value={r.naam} onChange={e => updRow(r.id, 'naam', e.target.value)} /></td>
                    <td style={{ padding: '5px 6px' }}><Inp type="number" placeholder="1" value={r.teller} onChange={e => updRow(r.id, 'teller', e.target.value)} /></td>
                    <td style={{ padding: '5px 6px' }}><Inp type="number" placeholder="bijv. 100" value={r.noemer} onChange={e => updRow(r.id, 'noemer', e.target.value)} /></td>
                    <td style={{ padding: '5px 6px' }}><Inp type="number" placeholder="bijv. 125" value={r.huidig} onChange={e => updRow(r.id, 'huidig', e.target.value)} /></td>
                    <td style={{ padding: '5px 6px', textAlign: 'center' }}>
                      <button onClick={() => delRow(r.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: S.muted, padding: '2px 6px', borderRadius: 4 }}>×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {breukCheck && (
            <div style={{ margin: '8px 20px 4px', padding: '6px 10px', borderRadius: 6, fontSize: 12, fontFamily: 'monospace', background: breukCheck.ok ? S.greenBg : S.amberBg, color: breukCheck.ok ? S.green : S.amber }}>
              {breukCheck.ok ? '✓ Breukdelen correct — totaal 100%' : '⚠ Breukdelen tellen op tot ' + breukCheck.pct + '% — controleer splitsingsakte'}
            </div>
          )}
          <button onClick={addRow} style={{ margin: '10px 20px', padding: '8px 14px', background: '#fff', border: '1.5px dashed ' + S.border, borderRadius: 8, fontFamily: 'inherit', fontSize: 13, color: S.muted, cursor: 'pointer', width: 'calc(100% - 40px)' }}>
            + Eigenaar toevoegen
          </button>
        </Card>

        {error && <div style={{ background: S.redBg, color: S.bordeaux, padding: '10px 14px', borderRadius: 8, fontSize: 13, marginBottom: 10 }}>{error}</div>}

        <button onClick={bereken} style={{ width: '100%', padding: 14, background: S.bordeaux, border: 'none', borderRadius: 12, fontFamily: 'Georgia,serif', fontSize: 17, color: '#fff', cursor: 'pointer', marginTop: 4 }}>
          Bereken maandelijkse bijdragen →
        </button>

        {result && (
          <div id="res-anker">
            <SecTitle style={{ marginTop: 36 }}>Resultaat</SecTitle>
            <button onClick={() => exportPDF(result)} style={{ width: '100%', padding: '11px 16px', background: '#fff', border: '1.5px solid ' + S.bordeaux, borderRadius: 10, fontFamily: 'inherit', fontSize: 14, color: S.bordeaux, cursor: 'pointer', fontWeight: 500, marginBottom: 14 }}>
              🖨 Exporteer als PDF / Afdrukken
            </button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <MethodBlock tag="Methode 1 — Wettelijke voorkeur" name="Op basis van MJOP"
                rows={[['Totale MJOP-kosten',fmt(result.mjopTotaal)],['Planperiode',result.planPeriode+' jaar'],['Jaarlijkse MJOP-dotatie',fmt(result.dotatie)],...buildExploitatieRows(result),['Totale jaarlasten VvE',fmt(result.jaarMjop)]]}
                total={result.hasMjop ? fmt(result.mndMjop) : '—'} />
              <MethodBlock tag="Methode 2 — Wettelijk minimum" name="0,5% van herbouwwaarde"
                rows={[['Herbouwwaarde',fmt(result.herbouwwaarde)],['0,5% jaarlijkse reservering',fmt(result.jaar05)],...buildExploitatieRows(result),['Totale jaarlasten VvE',fmt(result.jaar05Totaal)],['Toelichting','Minimumeis bij geen/oud MJOP']]}
                total={result.has05 ? fmt(result.mnd05) : '—'} />
            </div>
            <Card header={<CardHdr icon="🔢" bg={S.redBg} title="Maandelijkse bijdrage per eigenaar" sub="Verdeling naar rato breukdeel" />}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: S.cream, borderBottom: '1px solid ' + S.border }}>
                      {['Eigenaar','Breukdeel','Aandeel %','Huidig/mnd','MJOP/mnd','Δ MJOP','0,5%/mnd','Δ 0,5%'].map((h,i) => (
                        <th key={i} style={{ padding: '8px 10px', textAlign: i>1?'right':'left', fontSize: 10, fontWeight: 600, color: S.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.eigenaren.map((e, i) => {
                      const diffMjop = e.huidig!==null && e.bijdrMjop!==null ? e.bijdrMjop - e.huidig : null
                      const diffPct05 = e.huidig!==null && e.bijdr05!==null ? ((e.bijdr05 - e.huidig) / e.huidig * 100) : null
                      const diffPctMjop = e.huidig!==null && e.bijdrMjop!==null ? ((e.bijdrMjop - e.huidig) / e.huidig * 100) : null
                      const diff05 = e.huidig!==null && e.bijdr05!==null ? e.bijdr05 - e.huidig : null
                      const deltaTag = (diff, pct) => {
                        if (diff === null) return <span style={{color:S.muted}}>—</span>
                        const pos = diff > 0.005
                        const neg = diff < -0.005
                        const color = neg ? S.green : pos ? '#C0392B' : S.blue
                        const bg = neg ? S.greenBg : pos ? '#FDEAEB' : S.blueBg
                        const sign = pos ? '+' : ''
                        return <Tag c={bg} t={color}>{sign}{fmt(diff)} ({sign}{pct.toFixed(1)}%)</Tag>
                      }
                      return (
                        <tr key={i} style={{ borderBottom: i<result.eigenaren.length-1?'1px solid '+S.border:'none' }}>
                          <td style={{ padding:'8px 10px',fontWeight:500,fontSize:12 }}>{e.naam}</td>
                          <td style={{ padding:'8px 10px',fontFamily:'monospace',fontSize:12,textAlign:'right' }}>{e.teller}/{e.noemer}</td>
                          <td style={{ padding:'8px 10px',fontFamily:'monospace',fontSize:12,textAlign:'right' }}>{(e.aandeel*100).toFixed(2)}%</td>
                          <td style={{ padding:'8px 10px',fontFamily:'monospace',fontSize:12,textAlign:'right' }}>{e.huidig!==null?fmt(e.huidig):<span style={{color:S.muted}}>—</span>}</td>
                          <td style={{ padding:'8px 10px',fontFamily:'monospace',fontSize:12,textAlign:'right' }}>{e.bijdrMjop!==null?fmt(e.bijdrMjop):'—'}</td>
                          <td style={{ padding:'8px 10px' }}>{deltaTag(diffMjop, diffPctMjop)}</td>
                          <td style={{ padding:'8px 10px',fontFamily:'monospace',fontSize:12,textAlign:'right' }}>{e.bijdr05!==null?fmt(e.bijdr05):'—'}</td>
                          <td style={{ padding:'8px 10px' }}>{deltaTag(diff05, diffPct05)}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                  <tfoot style={{ borderTop: '2px solid ' + S.bordeaux }}>
                    <tr style={{ background: S.cream }}>
                      <td colSpan={2} style={{ padding:'9px 10px',fontSize:13,fontWeight:600,color:S.muted }}>Totaal VvE</td>
                      <td style={{ padding:'9px 10px',fontFamily:'monospace',fontSize:13,fontWeight:600,textAlign:'right' }}>100%</td>
                      <td style={{ padding:'9px 10px',fontFamily:'monospace',fontSize:13,fontWeight:600,color:S.bordeaux,textAlign:'right' }}>{fmt(result.eigenaren.reduce((s,e)=>s+(e.huidig||0),0))}</td>
                      <td style={{ padding:'9px 10px',fontFamily:'monospace',fontSize:13,fontWeight:600,color:S.bordeaux,textAlign:'right' }}>{result.hasMjop?fmt(result.eigenaren.reduce((s,e)=>s+(e.bijdrMjop||0),0)):'—'}</td>
                      <td></td>
                      <td style={{ padding:'9px 10px',fontFamily:'monospace',fontSize:13,fontWeight:600,color:S.bordeaux,textAlign:'right' }}>{result.has05?fmt(result.eigenaren.reduce((s,e)=>s+(e.bijdr05||0),0)):'—'}</td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Card>

            {/* JAARLIJKSE RESERVERING BLOK */}
            <div style={{ marginTop: 16 }}>
              <SecTitle>Jaarlijkse reservering voor onderhoud — VvE totaal</SecTitle>
              <div style={{ background: '#fff', border: '1px solid #E5DEDA', borderRadius: 12, overflow: 'hidden', marginBottom: 14 }}>
                <div style={{ padding: '14px 20px', borderBottom: '1px solid #E5DEDA', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 7, background: '#EAF4EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>💰</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Reservering = (totale maandelijkse bijdragen × 12) − exploitatiekosten</div>
                    <div style={{ fontSize: 11, color: '#8A7E7B', marginTop: 1 }}>Wat de VvE per jaar spaart voor onderhoud na aftrek van vaste lasten</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
                  {[
                    { label: 'Huidig', sub: 'Op basis van huidige bijdragen', value: result.jaarResHuidig, active: result.jaarResHuidig !== null },
                    { label: 'Op basis van MJOP', sub: 'Nieuwe bijdrage methode 1', value: result.jaarResMjop, active: result.hasMjop },
                    { label: 'Op basis van 0,5%', sub: 'Nieuwe bijdrage methode 2', value: result.jaarRes05, active: result.has05 },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '20px 24px', borderRight: i < 2 ? '1px solid #E5DEDA' : 'none' }}>
                      <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#8A7E7B', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 11, color: '#8A7E7B', marginBottom: 12 }}>{item.sub}</div>
                      {item.active ? (
                        <div style={{ fontFamily: 'Georgia,serif', fontSize: 26, color: item.value >= 0 ? '#2D6A4F' : '#C0392B', fontWeight: 400 }}>
                          {fmt(item.value)}
                          <div style={{ fontSize: 11, fontFamily: 'DM Sans,sans-serif', color: '#8A7E7B', marginTop: 4 }}>per jaar</div>
                        </div>
                      ) : (
                        <div style={{ fontSize: 14, color: '#8A7E7B' }}>—</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SecTitle({ children, style }) {
  return (
    <div style={{ fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.08em', color:'#8A7E7B', marginBottom:10, marginTop:26, display:'flex', alignItems:'center', gap:8, ...style }}>
      {children}<div style={{ flex:1, height:1, background:'#E5DEDA' }} />
    </div>
  )
}
function Card({ header, children }) {
  return <div style={{ background:'#fff', border:'1px solid #E5DEDA', borderRadius:12, overflow:'hidden', marginBottom:14 }}>{header}{children}</div>
}
function CardHdr({ icon, bg, title, sub }) {
  return (
    <div style={{ padding:'14px 20px', borderBottom:'1px solid #E5DEDA', display:'flex', alignItems:'center', gap:10 }}>
      <div style={{ width:30, height:30, borderRadius:7, background:bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>{icon}</div>
      <div><div style={{ fontSize:13, fontWeight:600 }}>{title}</div><div style={{ fontSize:11, color:'#8A7E7B', marginTop:1 }}>{sub}</div></div>
    </div>
  )
}
function Field({ label, children }) {
  return <div style={{ marginBottom:4 }}><label style={{ display:'block', fontSize:11, fontWeight:600, color:'#8A7E7B', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:5 }}>{label}</label>{children}</div>
}
function Inp(props) {
  return <input {...props} style={{ width:'100%', padding:'8px 11px', border:'1.5px solid #E5DEDA', borderRadius:8, fontFamily:'monospace', fontSize:14, color:'#1A1614', background:'#FAF7F2', outline:'none' }} onFocus={e=>{e.target.style.borderColor='#991A21';e.target.style.background='#fff'}} onBlur={e=>{e.target.style.borderColor='#E5DEDA';e.target.style.background='#FAF7F2'}} />
}
function Tag({ c, t, children }) {
  return <span style={{ display:'inline-block', padding:'2px 7px', borderRadius:4, fontSize:11, fontWeight:500, background:c, color:t }}>{children}</span>
}
function MethodBlock({ tag, name, rows, total }) {
  return (
    <div style={{ background:'#fff', border:'1px solid #E5DEDA', borderRadius:12, overflow:'hidden' }}>
      <div style={{ padding:'12px 18px 10px', borderBottom:'1px solid #E5DEDA' }}>
        <div style={{ fontSize:10, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.07em', color:'#8A7E7B' }}>{tag}</div>
        <div style={{ fontFamily:'Georgia,serif', fontSize:15, color:'#1A1614', marginTop:2 }}>{name}</div>
      </div>
      {rows.map(([l,v],i) => (
        <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'7px 18px', borderBottom:'1px solid #E5DEDA', fontSize:13 }}>
          <span style={{ color:'#8A7E7B' }}>{l}</span><span style={{ fontFamily:'monospace', fontWeight:500 }}>{v}</span>
        </div>
      ))}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', padding:'10px 18px', fontSize:13 }}>
        <span style={{ color:'#8A7E7B' }}>Maandlasten VvE totaal</span>
        <span style={{ fontFamily:'Georgia,serif', fontSize:22, color:'#991A21' }}>{total}</span>
      </div>
    </div>
  )
}
