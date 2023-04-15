import {TwitterFeedReturnType} from  'types/chat';

interface  TwitterFeedProps {
    message: string;
}

export const checkTwitterUrl=({message} : TwitterFeedProps) :TwitterFeedReturnType=>{
    let tweetId="", messageType="";
    const URL_REGEX = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    const messageContent= message?.split(' ');
  
    for(let i=0;i<messageContent?.length;i++){
      if(URL_REGEX.test(messageContent[i]) && messageContent[i]?.includes('twitter')){
        
        // Extracting tweetId
        const wordArray= messageContent[i]?.split('?')[0].split('/'); // split url at '?' and take first element and split at '/'
        if(wordArray?.length>=6){
          tweetId = wordArray[wordArray?.length-1];
          messageType="TwitterFeedLink";
          break;
        }
        else{
          messageType="Text";
          break;
        }
      }
    }
    return {tweetId, messageType};
  }