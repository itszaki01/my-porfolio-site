import { Badge, Button, Card, CardSection, Divider, Group, Image, ScrollArea, Stack, Title } from "@mantine/core";
import { IconBrandGithub,IconEye } from "@tabler/icons-react";
import { portfoliaDataType } from "../../types/dataType";
type Props = {
    cardData: portfoliaDataType
}
export default function CardPost({cardData}:Props) {

    return (
        <Card withBorder w={300}>
          
            <CardSection>
                <Image src={cardData.image} height={'100%'}/>
            </CardSection>
            <CardSection p={5} ta={'center'}>
            <Title order={2}>{cardData.pojectName}</Title>
          </CardSection>
            <CardSection p={5} >
                <ScrollArea h={150}  type="always" >
                        <Stack justify='space-evenly' gap={5} w={'100%'}>
                        {cardData.technics.map((teach,i)=>{
                            return <Badge key={i} radius={'xs'} size={'lg'} w={'100%'} color={teach.bgColor}>{teach.teachnie}</Badge>
                        })}

                        </Stack>
            
                </ScrollArea>
            </CardSection>
            <Divider m={5} />
            <CardSection p={5}>
                <Group justify='space-around'>
                    <Button w={'45%'} leftSection={<IconBrandGithub/>} onClick={()=> window.open(cardData.github,'_blank')}>GITHUB</Button>
                    <Button w={'45%'} leftSection={<IconEye/>} onClick={()=> window.open(cardData.demo,'_blank')}>DEMO</Button>
                </Group>
            </CardSection>
        </Card>
    );
}
