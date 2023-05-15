import React , { useRef, useState, } from "react";
import "./NewMovie.css";
import Input from "../components/Input";
import Button from "../UI/Button";

const NewMovie = (props) => {
  let nameRef = useRef(null);
  const [isLoading , setIsLoading] = useState(false);
  console.log(nameRef)
  const directorRef = useRef(null);
  const producerRef = useRef(null);
  //  directorRef useEffect(()=>{console.log(inputRef.current.value);
  // } , [inputRef])
  const postData = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    const movieName = nameRef.current.value;
    const directorName = directorRef.current.value;
    const producerName = producerRef.current.value;
    const payload = {movie : movieName , director : directorName , producer : producerName}
    await fetch(
      "https://crudcrud.com/api/032f5ac2048e4e83a01deb7f41957d87/movies",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
    .then((res)=>{
      setIsLoading(false);
      if(res.ok){alert("Movie Added Successfully");}
      nameRef.current.value = "";
      directorRef.current.value = "" ;
      producerRef.current.value = "" ;
      console.log(res.ok);
    
    })
    .catch((err)=>{console.log(err)})
  };
  
  return (
    <section>
      <div className="containersection">
        <form>
          <div className="movie-form">
          <Input id="name" labelName="Movie Name : " type="text" ref={nameRef} />
            <Input id="director" labelName="Directed By : " type="text"  ref={directorRef}/>
            <Input id="producer" labelName="Produced By : " type="text" ref={producerRef} />
            <div className="button-div">
              <Button name="Cancel" click={props.hideForm} type="button" />
             {!isLoading && <Button name="Add" type="submit" click={postData} />}
              {isLoading && <h3 style={{height : "20px"}}>Please Wait , Adding New Movie..... </h3>}
            </div>
          </div>
        </form>
      </div>
    </section>
    
  );
};

export default React.memo(NewMovie);
