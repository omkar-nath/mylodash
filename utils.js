function mySlice(array,start,end){
    let index=0,len=array.length;
    if(start<0)
    start=-start>len?len:(len+start);
    end=end>len?len:end;
    if(end<0)
    end+=len;
    len=start>end?0:(end-start);
    let result=Array(len);
    while(index<len){
        result[index++]=array[index+start];
    }
    return result;
}

export {mySlice};