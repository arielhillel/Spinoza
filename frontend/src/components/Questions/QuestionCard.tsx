import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Divider,
  Modal,
} from "@mantine/core";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { CalendarTime, UserCircle, Link as LinkIcon, Stars, Copy } from "tabler-icons-react";
import OpenQuestion from "./OpenQuestion";

type QuestionData = {
  question:{
  id: string;
  name: string;
  content: any;
  authorId: any;
  difficultyLevel: string;
  type: string
  tags: any;
  }


};

function QuestionCard({
question
}: QuestionData) {
  const [openedQuestion, setOpenedQuestion] = useState(false);
 const [copied, setCopied] = useState(false);
  return (
    <>
      <Modal
        opened={openedQuestion}
        onClose={() => setOpenedQuestion(false)}
        title={question.name}
        size="100%"
      >
        {<OpenQuestion/>}
      </Modal>
      <Card
        withBorder
        shadow="xl"
        p="lg"
        radius="xl"
        style={{
          height: "100%",
          width: "90%",
          minWidth: "90%",
          margin: "auto",
          display: "inline-block",
        }}
      >
        <Title order={4} style={{ height: 45, textAlign: "center" }}>
          {question.name}
        </Title>
        <Divider my="sm" color="blue" />

        <Card.Section style={{ margin: 5, height: 80 }}>
          <Text lineClamp={3} size="md" weight={500}>
            <MDEditor.Markdown
              style={{ backgroundColor: "white", color: "black" }}
              source={
                question.type === "MultipleChoiceQuestion" ? (
                  question.content.questionText
                ) : question.type === "OpenTextQuestion" ? (
                  question.content
                ) : (
                  <></>
                )
              }
            />
          </Text>
        </Card.Section>

        <Group
          spacing="xs"
          style={{ marginTop: 10, marginBottom: 20, height: 40 }}
        >
          {question.tags.map((i: any) => {
            return (
              <Badge key={i} color="green" variant="light">
                {i}
              </Badge>
            );
          })}
        </Group>

        <Group style={{ color: "#444848" }} spacing="xs">
          <Stars size={18} />
          <Text size="xs" weight={700}>
            Difficulty: {question.difficultyLevel}
          </Text>
        </Group>

        <Group style={{ color: "#444848" }} spacing="xs">
          <CalendarTime size={18} />
          <Text size="xs" weight={700}>
            Creation Date
          </Text>
        </Group>

        <Group style={{ color: "#444848" }} spacing="xs">
          <UserCircle size={18} />
          <Text size="xs" weight={700}>
            {question.authorId}
          </Text>
        </Group>

        <Group position="apart" spacing="xs">
           <Link to={`/questions/${question.id}`} style={{ textDecoration: "none" }}>
          <Button
            radius="lg"
            variant="light"
            color="blue"
            style={{ marginTop: 14, width: 120 }}
          >
            Open
          </Button>
          </Link>

         <CopyToClipboard
          text={`http://localhost:3000/questions/${question.id}`}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
          }}
        >
          <Button
            radius="lg"
            variant="light"
            color="gray"
            style={{ marginTop: 14 }}
          >
            {copied ? <Copy color="#40c057" /> : <LinkIcon />}
          </Button>
        </CopyToClipboard>
        </Group>
      </Card>
    </>
  );
}

export default QuestionCard;
