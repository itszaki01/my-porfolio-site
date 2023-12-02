import "@mantine/core/styles.css";
import { Container, Group, MantineProvider, Title } from "@mantine/core";
import { theme } from "./theme";
import CardPost from "./components/CardPost";
import { portfolioData } from "./data/data";

export default function App() {
    return (
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <Container size={"lg"} bg={"gray.9"} style={{borderRadius:6}}>
                <Title m={10} style={{ textAlign: "center" }}> Zakaria touil Project's </Title>
                <Group justify="center" w={'100%'}>
                    {portfolioData.map((project,i)=>{
                        return <CardPost key={i} cardData={project}/>
                    })}
                </Group>
            </Container>
        </MantineProvider>
    );
}
