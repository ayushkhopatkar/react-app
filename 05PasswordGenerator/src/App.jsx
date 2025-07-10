import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()+[]{}|;:<>?~"

    for(let i=1; i<=length; i++){
      let char= (Math.random() * str.length+1)
      char = Math.floor(char)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101); // For mobile devices
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(()=>{
passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-2xl font-bold text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-2 px-3 bg-amber-50 mb-5'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 mb-5 '
          onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 mb-2'>
          <input type="range"
          min={6} max={100} value={length} className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label >length :{length}</label>
        </div>
        <div className='flex items-center gap-x-1 mb-2'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);
          }} 
          />
          <label htmlFor="numberInput"> Numbers</label>
        </div>

        <div className='flex items-center gap-x-1 mb-2'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="characterInput"
          onChange={()=>{
            setCharAllowed((prev)=> !prev);
          }} 
          />
          <label htmlFor="characterInput"> Characters</label>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default App
