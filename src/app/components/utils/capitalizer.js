import React from 'react'

export default function removeUnderscoresAndCapitalize(text) {
    const formattedText = text.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return formattedText;
}
