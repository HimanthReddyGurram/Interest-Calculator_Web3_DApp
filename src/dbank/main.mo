import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";
import Text "mo:base/Text";

actor DBank{
  var currentValue: Float=300;
  var checkValue: Float=300;
  // currentValue:=300;
  var intersetValue:Float=300;

  var StartTime =Time.now();
  // StartTime:=Time.now();
  var InterTime=Time.now();

  public func topUp(amount: Float):async Text{
    currentValue+=amount;
    Debug.print(debug_show(currentValue));
    return "Successfully added."
  };

  public func withDraw(amount: Float):async Text{
    let a:Float=currentValue-amount;
    if(a>=0){
      currentValue-=amount;
    Debug.print(debug_show(currentValue));
    return "Successfully withdrawed";
    }else{
      Debug.print("enter smaller amount");
      return "Insufficent funds"
    }
  };

public query func checkBalComp(): async Float{
    return currentValue;
  };
public query func checkBalSimp(): async Float{
    return intersetValue;
  };

  public func compound(){
let currentTime=Time.now();
if(intersetValue < currentValue){
  let a=currentTime-StartTime;
  let sec=a/1000000000;
  currentValue:=currentValue*(1.01**Float.fromInt(sec));
  StartTime:=currentTime;
}else{
    let a=currentTime-InterTime;
  let sec=a/1000000000;
currentValue:=intersetValue*(1.01**Float.fromInt(sec));
StartTime:=currentTime;
}
  };

  public func simple(){
let currentTime=Time.now();
let a=currentTime-StartTime;
let sec=a/1000000000;
intersetValue:=currentValue*(1+(0.01*Float.fromInt(sec)));
InterTime:=currentTime;

  };
};

