---
layout: layout.njk
---
{% for principal in collections.principal %}
- [{{principal.data.title}}]({{principal.url | url}})
{%- endfor -%}