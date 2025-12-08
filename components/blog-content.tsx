import Link from "next/link"

interface BlogContentProps {
  content: string
  images?: { src: string; alt: string }[]
  checklist?: { item: string; checked: boolean }[]
}

export function BlogContent({ content, images, checklist }: BlogContentProps) {
  // Simple markdown processor (bold, newlines)
  const processContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (!line) return null;
      const withBold = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-200">$1</strong>')
      return <p key={i} className="text-slate-400 leading-relaxed my-2" dangerouslySetInnerHTML={{ __html: withBold }} />
    })
  }

  return (
    <div className="space-y-8">
      {/* Text Content */}
      <div className="prose-custom">
        {processContent(content)}
      </div>

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {images.map((img, i) => (
            <div key={i} className="space-y-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/50">
                {/* Note: Using standard img tag for simplicity with user uploaded external assets if needed, but Next/Image is better usually.
                    Given we moved them to public/images, basic img works fine. */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-slate-500 text-center italic">{img.alt}</p>
            </div>
          ))}
        </div>
      )}

      {/* Checklist */}
      {checklist && checklist.length > 0 && (
        <div className="mt-8 space-y-3 bg-slate-800/30 p-6 rounded-lg border border-slate-700/30">
          <h3 className="font-serif text-xl text-slate-200 mb-4">Museum Checklist</h3>
          <ul className="space-y-3">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-400">
                <div className={`mt-1 h-5 w-5 rounded border flex items-center justify-center shrink-0 ${item.checked ? 'bg-green-500/20 border-green-500 text-green-500' : 'border-slate-600'}`}>
                  {item.checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
                <span className={item.checked ? 'line-through decoration-slate-600 text-slate-500' : ''}>{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
