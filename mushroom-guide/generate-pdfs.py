import markdown
from weasyprint import HTML
import os

CSS_STYLE = """
@page {
    size: letter;
    margin: 2cm 2.5cm;
    @bottom-center {
        content: "Paola Adventurer — Archery · Camping · Explore";
        font-size: 8pt;
        color: #888;
    }
    @bottom-right {
        content: counter(page);
        font-size: 8pt;
        color: #888;
    }
}

body {
    font-family: -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.6;
    color: #2a2a2a;
    max-width: 100%;
}

h1 {
    color: #2c5f2d;
    font-size: 22pt;
    border-bottom: 3px solid #2c5f2d;
    padding-bottom: 8px;
    margin-top: 30px;
    page-break-after: avoid;
}

h2 {
    color: #2c5f2d;
    font-size: 16pt;
    margin-top: 25px;
    page-break-after: avoid;
    border-left: 4px solid #a5490f;
    padding-left: 12px;
}

h3 {
    color: #a5490f;
    font-size: 12pt;
    margin-top: 18px;
    page-break-after: avoid;
}

hr {
    border: none;
    border-top: 2px solid #d4c9a8;
    margin: 30px 0;
}

strong {
    color: #1a1a1a;
}

blockquote {
    background: #fdf6e3;
    border-left: 4px solid #a5490f;
    padding: 12px 16px;
    margin: 16px 0;
    font-size: 10pt;
}

blockquote p {
    margin: 0;
}

ul, ol {
    padding-left: 24px;
}

li {
    margin-bottom: 4px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: 10pt;
}

th {
    background: #2c5f2d;
    color: white;
    padding: 8px 10px;
    text-align: left;
    font-weight: bold;
}

td {
    padding: 6px 10px;
    border-bottom: 1px solid #ddd;
}

tr:nth-child(even) td {
    background: #f5f2eb;
}

em {
    color: #555;
}

code {
    background: #f0ede4;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10pt;
}

/* Status badges via text */
p:has(strong:first-child) {
    margin-top: 8px;
}

/* Page breaks before major sections */
h1 {
    page-break-before: always;
}

h1:first-of-type {
    page-break-before: avoid;
}

/* Checkbox list styling */
li {
    list-style-position: outside;
}
"""

def generate_pdf(md_path, pdf_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()

    html_content = markdown.markdown(
        md_content,
        extensions=['tables', 'fenced_code']
    )

    full_html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>{CSS_STYLE}</style>
</head>
<body>
{html_content}
</body>
</html>"""

    HTML(string=full_html).write_pdf(pdf_path)
    print(f"Generated: {pdf_path}")

base = "/home/user/Bear-Card/mushroom-guide"

generate_pdf(
    f"{base}/en/mushroom-guide-en.md",
    f"{base}/en/The-Hikers-Mushroom-Guide-EN.pdf"
)

generate_pdf(
    f"{base}/es/mushroom-guide-es.md",
    f"{base}/es/Guia-de-Hongos-para-Senderistas-ES.pdf"
)

print("\nDone! Both PDFs generated.")
