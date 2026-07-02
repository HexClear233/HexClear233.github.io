import csv
import os

csv_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '2026-vol2', 'vc_ic.csv')

def escape_html(text):
    if not text:
        return ''
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;'))

def read_csv(filepath):
    entries = []
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            entries.append(row)
    return entries

def generate_entry(index, row, xuhao_class='xuhao'):
    title = row.get('标题', '').strip()
    up = row.get('up主', '').strip()
    time = row.get('转换时间', '').strip()
    desc = row.get('视频简介', '').strip()
    bvid = row.get('bvid', '').strip()

    title_escaped = escape_html(title)
    desc_escaped = escape_html(desc)

    lines = []
    lines.append(f'                <tr>')
    lines.append(f'                    <th class="{xuhao_class}">H{index}</th>')
    lines.append(f'                    <th class="video">')
    lines.append(f'                        <img src="./cover_display/{bvid}.jpg" class="video-cover" alt="{title_escaped}" title="{desc_escaped}"/>')
    lines.append(f'                    </th>')
    lines.append(f'                    <th>')
    lines.append(f'                        <table class="video-info">')
    lines.append(f'                            <tr>')
    lines.append(f'                                <td colspan="2">视频标题: {title_escaped}</td>')
    lines.append(f'                            </tr>')
    lines.append(f'                            <tr>')
    lines.append(f'                                <td width="33%">{bvid}</td>')
    lines.append(f'                                <td width="33%">发布时间: {time}</td>')
    lines.append(f'                            </tr>')
    lines.append(f'                            <tr>')
    lines.append(f'                                <td colspan="2">Staff: /</td>')
    lines.append(f'                            </tr>')
    lines.append(f'                            <tr>')
    lines.append(f'                                <td colspan="2">关联社团: {escape_html(up)}</td>')
    lines.append(f'                            </tr>')
    lines.append(f'                        </table>')
    lines.append(f'                    </th>')
    lines.append(f'                </tr>')
    return '\n'.join(lines)

def main():
    if not os.path.exists(csv_path):
        print(f'错误：CSV文件不存在: {csv_path}')
        return

    entries = read_csv(csv_path)
    if not entries:
        print('CSV文件为空，无条目可生成。')
        return

    print(f'共读取 {len(entries)} 条记录\n')
    print('<!-- 翻唱翻奏作品 [IC] 条目 -->')
    for i, row in enumerate(entries, start=1):
        xuhao_class = 'xuhao' if i <= 3 else 'non-display-xuhao'
        entry = generate_entry(i, row, xuhao_class)
        print(entry)
        if i < len(entries):
            print()

if __name__ == '__main__':
    main()