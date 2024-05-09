import './global.css';

export const metadata = {
  title: 'FwDays Architecture Course',
  description:
    'Chapter 1, lesson 2'
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {props.children}
        {props.modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
