export default function HompageNavCol() {

    return (
        <>
            <ul className="flex flex-col self-center w-3/10 text-xl">
                <li className="my-5"><a href="/tf-image-recognition">First TF Project (guessing double a number)</a></li>
                <li className="my-5"><a href="/tf-number-predictor">Second TF Project (image interpolation)</a></li>
                <li className="my-5"><a href="/threeJS-practice">Practicing ThreeJS</a></li>
            </ul>
        </>
    )
}
