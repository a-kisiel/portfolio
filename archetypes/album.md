+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
[params]    
    artist = ''
    genre = ''
    releaseYear = ''
    subtype = 'album'
+++