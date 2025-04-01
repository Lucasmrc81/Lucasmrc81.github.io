from flask import Flask, render_template

app = Flask(__name__, static_folder='.', static_url_path='', template_folder='.')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')

@app.route('/tecnologia')
def tecnologia():
    return render_template('tecnologia.html')

@app.route('/projetos')
def projetos():
    return render_template('projetos.html')

@app.route('/contato')
def contato():
    return render_template('contato.html')

@app.route('/experiencia')
def experiencia():
    return render_template('experiencia.html')

if __name__ == '__main__':
    app.run(debug=True)
