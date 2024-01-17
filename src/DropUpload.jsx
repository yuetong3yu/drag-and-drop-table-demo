import { useEffect, useRef } from 'react'

export const DropUpload = () => {
  const dropAreaRef = useRef(null)

  // drop section event
  useEffect(() => {
    if (!dropAreaRef.current) return

    dropAreaRef.current.addEventListener('drop', handleDrop, false)

    function handleDrop(e) {
      let dt = e.dataTransfer
      let files = dt.files

      // Handle files here
      handleFiles(files)
    }

    function handleFiles(files) {
      Array.from(files).forEach(() => console.log('File you dragged: ', files))
    }
  }, [])

  // add highlight class
  useEffect(() => {
    const highlightEvents = ['dragenter', 'dragover']
    const unhighlightEvents = ['dragleave', 'drop']

    highlightEvents.forEach((eventName) => {
      dropAreaRef.current.addEventListener(eventName, highlight, false)
    })

    unhighlightEvents.forEach((eventName) => {
      dropAreaRef.current.addEventListener(eventName, unhighlight, false)
    })

    function highlight(e) {
      dropAreaRef.current.classList.add('highlight')
    }

    function unhighlight(e) {
      dropAreaRef.current.classList.remove('highlight')
    }
  }, [])

  // prevent deafults
  useEffect(() => {
    const dragEvents = ['dragenter', 'dragover', 'dragleave', 'drop']
    dragEvents.forEach((eventName) => {
      dropAreaRef.current.addEventListener(eventName, preventDefaults, false)
    })

    function preventDefaults(e) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [])

  return (
    <div id="drop-area" ref={dropAreaRef}>
      <p>Drag a file here </p>
      <input
        type="file"
        id="fileElem"
        multiple
        accept="image/*"
        style={{ display: 'none' }}
      />
    </div>
  )
}
