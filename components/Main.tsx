import { useEffect, useState } from "react"
import { getMergeSortAnimations } from "../algorithms/mergeSort"

const ANIMATION_SPEED_MS = 1
const NUMBER_OF_ARRAY_BARS = 600

const Main = () => {
  const [randomArray, setRandomArray] = useState<number[]>([])
  const [buttonfunctionallity, setButtonfunctionallity] = useState(true)

  useEffect(() => {
    const initialRandomArray = [...Array(NUMBER_OF_ARRAY_BARS)].map((e) =>
      Math.floor(Math.random() * 1000 + 1)
    )
    setRandomArray(initialRandomArray)
  }, [])

  const createNewRandomArray = () => {
    const newRadomArray = [...Array(NUMBER_OF_ARRAY_BARS)].map((e) =>
      Math.floor(Math.random() * 1000 + 1)
    )
    setRandomArray(newRadomArray)
  }

  const reset = () => {
    window.location.reload()
  }

  const visualizeAlgorithm = (animations: any[]) => {
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName(
        "array-bar"
      ) as HTMLCollectionOf<HTMLElement>
      const isColorChange = i % 3 !== 2
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i]
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        const color = i % 3 === 0 ? "red" : "rgb(96 165 250)"
        if (i === animations.length - 1) {
          setTimeout(() => {
            barOneStyle.backgroundColor = color
            barTwoStyle.backgroundColor = color
            setButtonfunctionallity(true)
          }, i * ANIMATION_SPEED_MS)
        } else {
          setTimeout(() => {
            barOneStyle.backgroundColor = color
            barTwoStyle.backgroundColor = color
          }, i * ANIMATION_SPEED_MS)
        }
      } else {
        if (i === animations.length - 1) {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style
            barOneStyle.height = `${newHeight / 10}%`
            setButtonfunctionallity(true)
          }, i * ANIMATION_SPEED_MS)
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i]
            const barOneStyle = arrayBars[barOneIdx].style
            barOneStyle.height = `${newHeight / 10}%`
          }, i * ANIMATION_SPEED_MS)
        }
      }
    }
  }

  const mergeSort = () => {
    setButtonfunctionallity(false)
    setTimeout(() => {
      const animations = getMergeSortAnimations(randomArray)
      visualizeAlgorithm(animations)
    })
  }

  return (
    <>
      <div className="bg-gray-300 h-[10%] flex justify-center items-center">
        <button
          className={`p-2 mx-5 border-2 border-black h-min ${
            !buttonfunctionallity && "bg-gray-600"
          }`}
          onClick={createNewRandomArray}
          disabled={!buttonfunctionallity}
        >
          New Array
        </button>
        <button
          className="p-2 mx-5 border-2 border-black h-min"
          onClick={reset}
        >
          Reset
        </button>
        <button
          className={`p-2 mx-5 border-2 border-black h-min ${
            !buttonfunctionallity && "bg-gray-600"
          }`}
          onClick={() => {
            setButtonfunctionallity(false)
            mergeSort()
          }}
          disabled={!buttonfunctionallity}
        >
          Merge Sort
        </button>
      </div>
      <div className="bg-gray-500 h-[80%] w-full flex items-end px-2 pt-2">
        {randomArray.map((e, i) => {
          return (
            <div
              key={i}
              style={{ height: `${e / 10}%` }}
              className="array-bar bg-blue-400 w-full"
            ></div>
          )
        })}
      </div>
    </>
  )
}

export default Main
