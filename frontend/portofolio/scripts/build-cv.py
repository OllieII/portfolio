"""Build the downloadable CV from the same data used by the website."""
from pathlib import Path
import json
from html import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/content/cv-data.json").read_text(encoding="utf-8"))
output = ROOT / "public/CV_Olly.pdf"
styles = getSampleStyleSheet()
styles.add(ParagraphStyle("CVName", fontName="Helvetica-Bold", fontSize=22, leading=26, spaceAfter=6))
styles.add(ParagraphStyle("CVBody", fontName="Helvetica", fontSize=9.5, leading=13, spaceAfter=5))
styles.add(ParagraphStyle("CVSmall", parent=styles["CVBody"], fontSize=8.5, leading=11, textColor=colors.HexColor("#655b4b")))
styles.add(ParagraphStyle("CVSection", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=colors.HexColor("#7f4d2f"), spaceBefore=16, spaceAfter=8, keepWithNext=True))
styles.add(ParagraphStyle("CVEntry", fontName="Helvetica-Bold", fontSize=10, leading=13, spaceBefore=6, spaceAfter=3, keepWithNext=True))
styles.add(ParagraphStyle("CVBullet", parent=styles["CVBody"], leftIndent=10, firstLineIndent=-7, spaceAfter=4))

def clean(text):
    return escape(str(text).replace("\u2013", "-").replace("\u2014", "-").replace("\u2011", "-").replace("\u2019", "'").replace("\u2192", "to").replace("\u00b7", " | "))

story = []
def p(text, style="CVBody"):
    story.append(Paragraph(clean(text), styles[style]))
def section(title):
    p(title.upper(), "CVSection")
def link(url, label):
    return f'<a href="{escape(url, quote=True)}" color="#7f4d2f">{clean(label)}</a>'
def experience(item):
    start = len(story)
    p(item["title"], "CVEntry")
    p(item["company"] + " | " + item["duration"], "CVSmall")
    for text in item.get("responsibilities", []):
        p("- " + text, "CVBullet")
    if item.get("projectLink"):
        story.append(Paragraph(link("https://ollieii.github.io" + item["projectLink"], "Project details"), styles["CVSmall"]))
    entry = story[start:]
    del story[start:]
    story.append(KeepTogether(entry))

p(data["name"], "CVName")
p(data["title"])
story.append(Paragraph(" | ".join([
    link("mailto:" + data["contact"]["email"], data["contact"]["email"]),
    link("https://" + data["contact"]["portfolio"], "Portfolio"),
    link("https://" + data["contact"]["github"], "GitHub")]), styles["CVSmall"]))
p("Updated November 17, 2026", "CVSmall")

section("Education")
for item in data["education"]:
    p(item["school"], "CVEntry")
    p(item["degree"] + " | " + item["duration"])

section("Research interests")
for text in data["research_interests"]:
    p("- " + text, "CVBullet")

section("Research experience")
for item in data["research_experience"]:
    experience(item)

section("Manuscripts")
for item in data["publications"]:
    p(item["title"], "CVEntry")
    p(item["authors"])
    p(item["venue"], "CVSmall")

section("Current projects")
for item in data["current_projects"]:
    story.append(KeepTogether([
        Paragraph(clean(item["title"]), styles["CVEntry"]),
        Paragraph(clean(item["status"]), styles["CVSmall"]),
        Paragraph(clean(item["summary"]), styles["CVBody"]),
        Paragraph(link("https://ollieii.github.io" + item["projectLink"], "Project details and current status"), styles["CVSmall"])
    ]))

section("Teaching and mentorship")
for item in data["teaching"]:
    experience(item)

section("Creative work")
for item in data["involvement"]:
    experience(item)

section("Posters")
for item in data["posters"]:
    p(item["title"], "CVEntry")
    p(item["authors"])

section("Honors")
for text in data["honors"]:
    p("- " + text, "CVBullet")

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#ddd4c7"))
    canvas.line(43, 35, letter[0]-43, 35)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#655b4b"))
    canvas.drawString(43, 23, "Olly (Ziqi) Guo | Curriculum vitae")
    canvas.drawRightString(letter[0]-43, 23, str(doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate(str(output), pagesize=letter, rightMargin=43, leftMargin=43, topMargin=42, bottomMargin=48,
                        title="Olly (Ziqi) Guo - Curriculum Vitae", author="Olly (Ziqi) Guo")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(output)
