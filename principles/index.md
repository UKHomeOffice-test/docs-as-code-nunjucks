---
layout: layout.njk
---
{% for principle in collections.principle %}
- [{{principle.data.title}}]({{principle.url | url}})
{%- endfor -%}
