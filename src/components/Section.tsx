const Section = ({ header, body, id }: { header: string, body: JSX.Element, id?: string }) => (
    <section id={id} className={id === 'music-videos' ? 'section mt-5' : 'section block'}>
        <h3 className='text-center mb-3'>{header}</h3>
        {body}
    </section>
)

export default Section