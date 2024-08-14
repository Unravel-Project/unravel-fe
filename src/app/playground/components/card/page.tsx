import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import React from "react"

interface cardProp {
    title:string;    
    description:string;  
    cardContent:string; 
    cardFooter:string;   
  }

 const CardItem = ({title, description, cardContent, cardFooter}:cardProp):React.ReactNode => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{cardContent}</p>
            </CardContent>
            <CardFooter>
                <p>{cardFooter}</p>
            </CardFooter>
        </Card>

    )
}

const CardPage = ():React.ReactNode => {
    return (
        <>
            <CardItem title="card 1" description="hahahah" cardContent="ini konten" cardFooter="ini footer"></CardItem>
            <CardItem title="card 2" description="huhuhuhu" cardContent="ini konten yaa" cardFooter="ini footer ya"></CardItem>
        </>
        

    )
}


 export default CardPage;