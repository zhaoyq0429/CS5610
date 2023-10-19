function MappingThroughArrays() {
    const numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = (a) => a * a;
  
    const squares = [];
    for (let i = 0; i < numberArray1.length; i++) {
      const a = numberArray1[i];
      squares.push(square(a));
    }
  
    const cubes = [];
    for (let i = 0; i < numberArray1.length; i++) {
      const a = numberArray1[i];
      cubes.push(a * a * a);
    }
  
    return (
      <div>
        <h3>Map</h3>
        squares={squares} <br />
        cubes = {cubes} <br />
      </div>
    );
  }
  
  export default MappingThroughArrays;
  