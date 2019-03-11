import React from 'react';

const Tableau = props => (
      <table>
            <thead>
                  <tr id="taB">
                    <th className="act">id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th className="act">Actions</th>
                  </tr>
            </thead>
            <tbody>
                {props.users.length > 0? (
                    props.users.map(user => (
                      <tr>
                          <td>{user.id}</td>
                          <td>{user.nom}</td>
                          <td>{user.prenom}</td>
                          <td>
                          <button  type="Supprimer" id="suppr" className="btn btn-danger" onClick={() => {
                                      if(window.confirm('Confirmer la Suppression?')){
                                        props.suppr(user.id)}
                        }} >X</button>
                          </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                    </tr>
                )}
            </tbody>
      </table>
)
export default Tableau;