
import { useRef } from "react"
import Card from "./card"


export default function Foreground() {
  const ref = useRef(null);
  //const data =[
  //icon , desc , filesize, closeOrDownload,
  //]
  const data = [
    {
      desc: 'This is the updated text i have provided',
      filesize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-blue-600' },

    },
     {
      desc: 'This is the new text i have provided',
      filesize: '.4mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'bg-green-600' },

    },
      {
      desc: 'This is the third updated text i have provided',
      filesize: '.1mb',
      close: true,
      tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'green' },

    }
  ]

  return (
    <div ref={ref} className="fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap"> 
      {data.map((item,index) =>
        <Card key={index} data={item} refer={ref} />
      )}
      

    </div>

  ) 
}
