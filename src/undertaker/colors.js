let rgb2hsb = (r, g, b) => {
    let h;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const m_m = max - min;
    const s = max === 0 ? 0 : m_m / max;
    const v = max;
    
    switch (max) {
    case min:
        h = 0;
        break;
    case r:
        h = 60 * ( ( g - b ) / m_m );
        break;
    case g:
        h = 60 * ( 2 + ( ( b - r ) / m_m ) );
        break;
    case b:
        h = 60 * ( 4  + ( ( r - g ) / m_m ) );
        break;
    }

    return {
        h: h,
        s: s,
        b: v
    };
}

/* Conversion from HSB/HSV to RGB */

function hsb2rgb (h, s, v) {
    var r, g, b;
    h = (isNaN(h) || h < 0 || h > 360 ? 0 : h) / 60;
    const c = v * s;
    const d = ( h % 2 ) - 1;
    const i = c * ( 1 - ( d < 0 ? -d : d ) );
    const m = v - c;
    
    r = g = b = 0;
    
    if (0 <= h && h <= 1) {
        r = c;
        g = i;
        b = 0;
    
    } else if (1 < h && h <= 2) {
        r = i;
        g = c;
        b = 0;
    
    } else if (2 < h && h <= 3) {
        r = 0;
        g = c;
        b = i;
    
    } else if (3 < h && h <= 4) {
        r = 0;
        g = i;
        b = c;
    
    } else if (4 < h && h <= 5) {
        r = i;
        g = 0;
        b = c;
    
    } else if (5 < h && h <= 6) {
        r = c;
        g = 0;
        b = i;
    
    }

    return {
        r: Math.round(r + m),
        g: Math.round(g + m),
        b: Math.round(b + m)
    };
}

let darker = function(r, g, b, factor) {
    let hsb = rgb2hsb(r, g, b);

    return hsb2rgb(hsb.h, hsb.s, hsb.b * factor);
};

export {
    rgb2hsb,
    hsb2rgb,
    darker
}
