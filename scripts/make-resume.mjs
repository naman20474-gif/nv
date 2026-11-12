// Generates a minimal, valid placeholder PDF at public/resume.pdf
// so the Resume action is never a dead link. Replace with your real file.
import { writeFileSync } from 'node:fs'

let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'
const offsets = []

function obj(n, body) {
  offsets[n] = Buffer.byteLength(pdf, 'latin1')
  pdf += `${n} 0 obj\n${body}\nendobj\n`
}

obj(1, '<< /Type /Catalog /Pages 2 0 R >>')
obj(2, '<< /Type /Pages /Kids [3 0 R] /Count 1 >>')
obj(
  3,
  '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>',
)

const stream =
  'BT /F1 26 Tf 72 706 Td (Your Name) Tj ET\n' +
  'BT /F1 14 Tf 72 676 Td (Full-Stack Developer) Tj ET\n' +
  'BT /F1 11 Tf 72 646 Td (Placeholder resume - replace public/resume.pdf with your own file.) Tj ET'

obj(4, `<< /Length ${Buffer.byteLength(stream, 'latin1')} >>\nstream\n${stream}\nendstream`)
obj(5, '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')

const xrefStart = Buffer.byteLength(pdf, 'latin1')
let xref = 'xref\n0 6\n0000000000 65535 f \n'
for (let i = 1; i <= 5; i += 1) {
  xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}
pdf += xref
pdf += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`

writeFileSync(new URL('../public/resume.pdf', import.meta.url), Buffer.from(pdf, 'latin1'))
console.log('Wrote public/resume.pdf')
